const { test, expect } = require('@playwright/test');
const { HotelBook } = require('../pageobjects/HotelBook');
const { FlightBook } = require('../pageobjects/FlightBook');
const { AttractionsBook } = require('../pageobjects/AttractionsBook');

const { collectFailure } = require('../ai/failureCollector');
const { buildFailurePrompt } = require('../ai/promptBuilder');
const { analyzeFailure, parseAnalysis, saveFailureReport } = require('../ai/failureAnalyzer');
const { isLocatorFailure, getLocatorSuggestion } = require('../ai/locatorAdvisor');

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({ path: testInfo.outputPath('failure.png'), fullPage: true });

    const failureData = await collectFailure(page, testInfo);

    // Phase 1 - Failure Analysis
    const failurePrompt = buildFailurePrompt(failureData);
    const aiResponse = await analyzeFailure(failurePrompt);

    const analysis = parseAnalysis(aiResponse);

    console.log(
      '\n========== AI FAILURE ANALYSIS ==========\n'
    );

    console.log(
      JSON.stringify(analysis, null, 2)
    );

    console.log(
      '\n==========================================\n'
    );

    const reportPath =
      saveFailureReport(
        failureData,
        analysis
      );

    console.log(
      'AI Failure Report:',
      reportPath
    );


    // Phase 2 - Locator Advisor
    if (isLocatorFailure(failureData)) {

      const locatorSuggestion =
        await getLocatorSuggestion(
          page,
          failureData
        );

      console.log(
        '\n========== LOCATOR SUGGESTION ==========\n'
      );

      console.log(
        JSON.stringify(
          locatorSuggestion,
          null,
          2
        )
      );

      console.log(
        '\n========================================\n'
      );
    }
  }
});

test.only('Hotel Booking UAT', async ({ page }) => {

  test.setTimeout(120000);

  const numberOfChildren = 3;
  const ageDropdowns = page.getByRole('combobox');

  //Hotel Book 
  const hotelBookPage = new HotelBook(page);
  await hotelBookPage.goTo();
  await hotelBookPage.miscSTeps();

  //Child & Room Select with Loop
  await hotelBookPage.childRoom(numberOfChildren, ageDropdowns);

  // //Filters
  await hotelBookPage.filtersU();

  // Low Price & New Page
  const lowestPriceData = await hotelBookPage.lowPrice();
  console.log('Lowest Price:', lowestPriceData.lowestPrice);
  console.log('Lowest Price Index:', lowestPriceData.lowestPriceIndex);
  const newPage = await hotelBookPage.openLowestPricedProperty(lowestPriceData.lowestPriceIndex);
  await hotelBookPage.validatePropertyPage(newPage, lowestPriceData.lowestPrice);
});

test('Flights Booking UAT', async ({ page }) => {

  const flightBookPage = new FlightBook(page);
  await flightBookPage.goTo();
  await flightBookPage.searchFlight();
  await flightBookPage.selectDate();
  await flightBookPage.reSelect();
  const highestPrice = await flightBookPage.selectHighestPricedFlight(); // Store the returned highest price so we can pass it to the validation method
  await flightBookPage.validateFlightPage(highestPrice);// Validate that the price on the next page matches the selected flight's highest price

});

test('Attractions Page UAT', async ({ page }) => {

  const attractionsBookpage = new AttractionsBook(page);
  await attractionsBookpage.goTo();
  await attractionsBookpage.searchAttraction();
  await attractionsBookpage.selectDate();
  await attractionsBookpage.filtersA();
  await attractionsBookpage.findLowestPriceAndValidate();

});