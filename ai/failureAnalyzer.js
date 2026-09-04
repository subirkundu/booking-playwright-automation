require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');
const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});


async function analyzeFailure(prompt) {

    const response = await ai.models.generateContent({model: 'gemini-3.6-flash',contents: prompt});

    return response.text;
}

function parseAnalysis(responseText) {

    try {

        // Remove Markdown code fences if Gemini returns JSON
        // wrapped inside ```json ... ```
        const cleanedResponse = responseText
            .replace(/^```json\s*/i, '')
            .replace(/^```\s*/i, '')
            .replace(/\s*```$/i, '')
            .trim();

        return JSON.parse(cleanedResponse);

    } catch (error) {

        return {
            summary: responseText,
            failureType: 'Unknown',
            rootCause: 'AI response could not be parsed as structured JSON.',
            evidence: [],
            recommendations: [],
            confidence: 'Unknown'
        };
    }
}


function saveFailureReport(failureData, analysis) {

    const reportDirectory = path.join(process.cwd(),'ai-reports');
    fs.mkdirSync(reportDirectory, {recursive: true});
    const safeTestName = failureData.testName.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    const fileName =`${safeTestName}-${failureData.project}.json`;
    const reportPath = path.join(reportDirectory,fileName);
    const report = {

        testName: failureData.testName,

        browser: failureData.project,

        status: failureData.status,

        url: failureData.url,

        failureLocation: failureData.failureLocation,

        error: failureData.error,

        analysis

    };

    fs.writeFileSync(
        reportPath,
        JSON.stringify(report, null, 2),
        'utf8'
    );

    return reportPath;
}


module.exports = {analyzeFailure,parseAnalysis,saveFailureReport};