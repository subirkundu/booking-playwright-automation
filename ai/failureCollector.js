const fs = require('fs');

// Find exact failure location from stack trace
function extractFailureLocation(stack) {

    if (!stack) {
        return null;
    }

    const match = stack.match(/\s+at .*?\(?([A-Za-z]:\\.*?):(\d+):(\d+)\)?/);

    if (!match) {
        return null;
    }

    return {
        filePath: match[1],
        lineNumber: Number(match[2]),
        columnNumber: Number(match[3])
    };
}


// Read source code around the failing line
function getSourceContext(filePath, lineNumber) {

    if (!filePath || !lineNumber) {
        return null;
    }

    try {

        const source = fs.readFileSync(filePath, 'utf8');

        const lines = source.split(/\r?\n/);

        const startLine = Math.max(1, lineNumber - 5);

        const endLine = Math.min(lines.length, lineNumber + 5);

        const context = [];

        for (
            let i = startLine;
            i <= endLine;
            i++
        ) {

            context.push(
                `${i}: ${lines[i - 1]}`
            );
        }

        return context.join('\n');

    } catch (error) {

        return `Unable to read source file: ${error.message}`;
    }
}


async function collectFailure(page, testInfo) {

    const screenshotPath = testInfo.outputPath('failure.png');

    const traceAttachment =
        testInfo.attachments.find(
            attachment =>
                attachment.name === 'trace'
        );

    const errorMessage = testInfo.error?.message || null;

    const stackTrace = testInfo.error?.stack || null;

    const failureLocation = extractFailureLocation(stackTrace);

    const sourceContext =
        failureLocation
            ? getSourceContext(
                failureLocation.filePath,
                failureLocation.lineNumber
            )
            : null;

    const failureData = {

        testName: testInfo.title,

        project:
            testInfo.project.use?.browserName ||
            'unknown',

        status:
            testInfo.status,

        error:
            errorMessage,

        stack:
            stackTrace,

        failureLocation,

        sourceContext,

        url:
            page.url(),

        screenshot:
            screenshotPath,

        trace:
            traceAttachment?.path || null
    };

    console.log(
        '\n========== FAILURE DATA ==========\n'
    );

    console.log(
        JSON.stringify(
            failureData,
            null,
            2
        )
    );

    console.log(
        '\n==================================\n'
    );

    return failureData;
}

module.exports = {collectFailure};