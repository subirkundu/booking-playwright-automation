function buildFailurePrompt(failureData) {

    return `
You are an experienced QA automation engineer.

Analyze the following Playwright test failure using ONLY the evidence
provided below.

TEST INFORMATION
----------------
Test Name: ${failureData.testName}
Browser: ${failureData.project}
Status: ${failureData.status}

ERROR
-----
${failureData.error || 'No error message available.'}

STACK TRACE
-----------
${failureData.stack || 'Stack trace not available.'}

FAILURE LOCATION
----------------
${failureData.failureLocation
    ? `File: ${failureData.failureLocation.filePath}
Line: ${failureData.failureLocation.lineNumber}
Column: ${failureData.failureLocation.columnNumber}`
    : 'Failure location not available.'}

SOURCE CODE AROUND FAILURE
--------------------------
${failureData.sourceContext || 'Source code context not available.'}

CURRENT URL
-----------
${failureData.url || 'URL not available.'}

SCREENSHOT
----------
${failureData.screenshot || 'Screenshot not available.'}

TRACE
-----
${failureData.trace || 'Trace not available.'}


ANALYSIS REQUIRED
-----------------
1. What exactly failed?
2. Identify the exact source file, method/function, and line number.
3. What is the most likely root cause?
4. Classify the failure into exactly one of these categories:

   - Locator issue
   - Synchronization / timing issue
   - Assertion failure
   - Navigation issue
   - Browser-specific issue
   - Application issue
   - Test data issue
   - JavaScript / framework error
   - Unknown

5. What evidence supports the conclusion?
6. What should a QA engineer investigate next?
7. How confident are you in the diagnosis?

RESPONSE FORMAT
---------------
Return ONLY valid JSON:

{
  "summary": "",
  "failureType": "",
  "rootCause": "",
  "evidence": [],
  "recommendations": [],
  "confidence": ""
}

IMPORTANT RULES
---------------
- Base the analysis only on the provided evidence.
- Do not invent missing information.
- Do not assume hidden code or hidden test data.
- Use the source code context when determining the root cause.
- Clearly distinguish confirmed facts from hypotheses.
- Do not modify the Playwright test.
- Do not provide automatic code changes.
- Return valid JSON only.
`;

}

module.exports = {
    buildFailurePrompt
};