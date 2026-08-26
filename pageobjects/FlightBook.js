const { expect } = require('@playwright/test');

class FlightBook {
    constructor(page) {

        this.page = page;
        this.dismiss2 = page.getByRole('button', { name: 'Dismiss sign-in info.' });
        this.fClick = page.locator("#flights");
        this.rValue = page.getByRole('button', { name: 'Remove value' });
        this.originL = page.getByRole('combobox', { name: 'Origin location' });
        this.destinationL = page.getByRole('combobox', { name: 'Destination location' });
        this.departure = page.getByRole('button', { name: 'Departure date' });
        this.increment = page.getByRole('button', { name: 'Increment' }).first();
        this.un1 = page.locator(".RxNS-button-container");
        this.clickDis = page.getByRole('button', { name: 'Dismiss' });
        this.canSelect = page.getByRole('option', { name: 'Toronto, Ontario, Canada' }).locator('[id="0"]'); // Need AI Powred here as well. Sometimes it's moves too first and got the option failed to check
        this.kolSelect = page.locator('[id="0"]');
        this.search = page.getByRole('button', { name: 'Search' });

    }
    async goTo() {
        await this.page.goto('https://www.booking.com/');
    }

    async searchFlight() {
        await this.dismiss2.click();
        await this.fClick.click();
        await this.rValue.click();
        await this.originL.fill('Toronto Canada');
        await this.page.waitForTimeout(300);
        await this.destinationL.fill('Kolkata India');
    }

    async selectDate() {

        // Generate dynamic departure and return dates We can use the AI Powered here are well as it's dynamic
        const today = new Date();

        const departureDate = new Date(today);
        departureDate.setDate(today.getDate() + 30);

        const returnDate = new Date(departureDate);
        returnDate.setDate(departureDate.getDate() + 4);

        // Convert dates to Booking.com's aria-label format We can use the AI Powered here are well as it's dynamic
        const formatDate = (date) =>
            date.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            });

        const departureLabel = formatDate(departureDate);
        const returnLabel = formatDate(returnDate);

        console.log('Departure Date:', departureLabel);
        console.log('Return Date:', returnLabel);

        // Create dynamic locators after the labels are available
        const departureLocator = this.page.locator(`[aria-label="${departureLabel}"]`);
        const returnLocator = this.page.locator(`[aria-label="${returnLabel}"]`);


        // Select Departure Date
        await this.departure.click();

        while (!(await departureLocator.isVisible())) {
            await this.page.getByRole('button', { name: /Next Month/i }).click();
        }

        await departureLocator.click();

        // Select Return Date
        while (!(await returnLocator.isVisible())) {
            await this.page.getByRole('button', { name: /Next Month/i }).click();
        }

        await returnLocator.click();

    }

    async reSelect() {

        await this.increment.click();
        await this.un1.click();
        await expect(this.page.getByText('An error occurred while trying to perform your search')).toBeVisible(); // :white_check_mark: Verify the error message is visible
        console.log("Error Message Detected");
        await this.clickDis.click();
        await this.page.waitForTimeout(2000);
        await this.originL.clear();
        await this.page.waitForTimeout(2000);
        await this.originL.fill('Toronto Canada');
        await this.page.waitForTimeout(2000); // Need AI Powred here as well. Sometimes it's moves too first and got the option failed to check
        await this.canSelect.check();
        await this.page.waitForTimeout(700);
        await this.destinationL.clear();
        await this.page.waitForTimeout(700);
        await this.destinationL.fill('Kolkata India'); // Need AI Powered here. Sometimes it fails to click on the checkbox
        await this.page.waitForTimeout(700);
        await this.kolSelect.check(); // Need AI Powered here. Sometimes it fails to click on the checkbox
        await this.page.waitForTimeout(700);
        await this.search.click();
    }

    async selectHighestPricedFlight() {

        const flightCards = this.page.getByRole('group', { name: /^Result item \d+$/ });
        await flightCards.first().waitFor();

        const cardCount = await flightCards.count();

        const prices = [];

        let highestPrice = -Infinity;
        let highestPriceCard = null;

        for (let i = 0; i < cardCount; i++) {
            const card = flightCards.nth(i);

            const priceText = await card.locator('.e2GB-price-text').textContent();

            if (priceText) {
                const price = Number(priceText.replace(/\D/g, ''));

                prices.push(price);

                if (price > highestPrice) {
                    highestPrice = price;
                    highestPriceCard = card;
                }
            }
        }

        console.log('All Prices:', prices);
        console.log('Highest Price:', highestPrice);

        // Click Select for the highest-priced flight
        if (highestPriceCard) {
            await highestPriceCard.getByRole('link', { name: 'Select' }).click();
        }
        return highestPrice; // Return the highest price so the test can use it for validation
    }

    async validateFlightPage(highestPrice) {


        // Get price from the next page
        const nextPagePriceText = await this.page.locator('.zQS2-display-price').textContent();

        // Convert "Tk 156,374" → 156374
        const nextPagePrice = Number(nextPagePriceText.replace(/\D/g, ''));

        // Verify the selected flight price is unchanged
        expect(nextPagePrice).toBe(highestPrice);
        console.log("Both Price Matched!!");
    }

}

module.exports = { FlightBook };