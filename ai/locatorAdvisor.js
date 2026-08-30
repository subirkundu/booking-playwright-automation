require('dotenv').config();

const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});


function isLocatorFailure(failureData) {

    const text = `
        ${failureData.error || ''}
        ${failureData.stack || ''}
    `.toLowerCase();

    return (
        text.includes('locator') ||
        text.includes('waiting for') ||
        text.includes('strict mode violation') ||
        text.includes('element is not visible') ||
        text.includes('element is not enabled')
    );
}


async function getLocatorSuggestion(page, failureData, failedLocator) {

    const domContext = await page.locator(
        'button, input, textarea, select, a, [role]'
    ).evaluateAll(elements =>
        elements
            .filter(element => {
                const rect = element.getBoundingClientRect();

                return (
                    rect.width > 0 &&
                    rect.height > 0
                );
            })
            .slice(0, 50)
            .map(element => ({
                tag: element.tagName.toLowerCase(),
                role: element.getAttribute('role'),
                text: (element.innerText || '')
                    .trim()
                    .replace(/\s+/g, ' ')
                    .slice(0, 100),
                ariaLabel: element.getAttribute('aria-label'),
                placeholder: element.getAttribute('placeholder'),
                testId: element.getAttribute('data-testid')
            }))
    );


    const prompt = `
You are a Playwright QA automation engineer.

A locator has failed and needs to be healed.

FAILED LOCATOR
--------------
${failedLocator}

ERROR
-----
${failureData.error || 'Not available'}

CURRENT DOM
-----------
${JSON.stringify(domContext, null, 2)}

TASK
----
Find the best replacement locator from the available DOM.

Preferred strategies:
1. role
2. label
3. testId
4. placeholder
5. text

Only use information that exists in the provided DOM.

Return ONLY valid JSON:

{
  "strategy": "",
  "value": "",
  "reason": "",
  "confidence": ""
}

Example:

{
  "strategy": "text",
  "value": "A week",
  "reason": "The page contains the text A week.",
  "confidence": "HIGH"
}

Do not invent elements or attributes.
`;


    const response =
        await ai.models.generateContent({model: 'gemini-3.6-flash',contents: prompt});


    const cleanedResponse =
        response.text
            .replace(/^```json\s*/i, '')
            .replace(/^```\s*/i, '')
            .replace(/\s*```$/i, '')
            .trim();


    return JSON.parse(cleanedResponse);
}


async function healClick(
    page,
    locator,
    failedLocator
) {

    try {

        // Try the original locator first
        await locator.click({
            timeout: 5000
        });

        return {
            healed: false,
            message: 'Original locator worked.'
        };

    } catch (error) {

        console.log(
            '\n========== AI HEALING TRIGGERED ==========\n'
        );


        const failureData = {
            error: error.message,
            stack: error.stack
        };


        const suggestion =
            await getLocatorSuggestion(
                page,
                failureData,
                failedLocator
            );


        console.log(
            'AI Locator Suggestion:',
            JSON.stringify(
                suggestion,
                null,
                2
            )
        );


        if (
            !suggestion.strategy ||
            !suggestion.value
        ) {

            throw error;
        }


        let healedLocator;


        switch (suggestion.strategy.toLowerCase()) {

            case 'role':
                healedLocator =
                    page.getByRole(
                        suggestion.value
                    );
                break;

            case 'label':
                healedLocator =
                    page.getByLabel(
                        suggestion.value
                    );
                break;

            case 'testid':
                healedLocator =
                    page.getByTestId(
                        suggestion.value
                    );
                break;

            case 'placeholder':
                healedLocator =
                    page.getByPlaceholder(
                        suggestion.value
                    );
                break;

            case 'text':
                healedLocator =
                    page.getByText(
                        suggestion.value,
                        { exact: true }
                    );
                break;

            default:
                throw error;
        }


        await healedLocator.click({
            timeout: 5000
        });


        console.log(
            '✅ AI Locator Healing Successful!'
        );


        return {
            healed: true,
            failedLocator,
            suggestion
        };
    }
}


module.exports = {
    isLocatorFailure,
    getLocatorSuggestion,
    healClick
};