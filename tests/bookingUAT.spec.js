const { test, expect } = require('@playwright/test');
const { HotelBook } = require('../pageobjects/HotelBook');
const { FlightBook } = require('../pageobjects/FlightBook');
const { AttractionsBook } = require('../pageobjects/AttractionsBook');

test.only('Hotel Booking UAT', async ({ page }) => {

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
  await attractionsBookpage.filtersA ();
  await attractionsBookpage.findLowestPriceAndValidate();

});