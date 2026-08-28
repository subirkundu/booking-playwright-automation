const { expect } = require('@playwright/test');

class HotelBook {
    constructor(page) {
        this.page = page;

        this.dismiss1 = page.getByRole('button', { name: 'Dismiss sign-in info.' });

        this.going = page.getByPlaceholder("Where are you going?"); //For Desktop
        this.hardLoc = page.locator('.efbfd2b849').first();
        this.flexLoc = page.getByRole('tab', { name: "I'm flexible" });
        // Temporary: intentionally broken locator for AI healing test
        this.week1 = page.getByText('A Week', { exact: true });
        // Original working locator:
        // this.week1 = page.getByText('A week', { exact: true });
        this.month1 = page.locator('.fb1145c89b', { hasText: 'Jan' });
        this.datePick1 = page
            .getByTestId('searchbox-datepicker-flexible-dates-container')
            .getByRole('button', { name: 'Select dates' });

        this.unKnown = page.getByTestId('occupancy-config');
        this.searchBox = page.locator('#searchbox-horizontal-occupancy-label');
        this.child1 = page.locator('div').filter({ hasText: /^0$/ }).locator('button').nth(1);
        this.rechild = page.locator('div').filter({ hasText: /^Children\d+$/ }).locator('button').nth(1);
        this.button1 = page.locator('div').filter({ hasText: /^1$/ }).locator('button').nth(1);
        this.room = page.locator('div').filter({ hasText: /^Rooms\d+$/ }).locator('button').nth(1);
        this.button2 = page.getByRole('button', { name: 'Done' });
        this.button3 = page.getByRole('button', { name: 'Search' });

        // Filter Start
        // In the Filters we need the AI Powered as well. Becauase sometimes filter's undo due to DOM rendering or something like that
        this.swiming = page.getByTestId("filters-group-label-content").first();
        this.waitE = page.getByTestId("filters-group-label-content");
        this.airCondition = page.getByTestId('filters-group-label-content').getByText('Air conditioning').nth(1);
        this.reRender = page.getByTestId("filters-group-label-content").first();
        this.kilo = page.getByTestId('filters-group-label-content').getByText('Less than 5 km');
        //Filters End

        this.checkC = page.getByTestId("price-and-discounted-price").first();
        this.prices = page.getByTestId("price-and-discounted-price");
        this.propertyCards = page.getByTestId("property-card-container");

    }

    async goTo() {
        await this.page.goto('https://www.booking.com/');
        await expect(this.page).toHaveTitle(/Booking.com/);
        console.log('Verified Successfully!');
    }

    async miscSTeps() {
        await this.dismiss1.click();
        await this.going.pressSequentially("Cox's Bazar");
        await this.page.waitForTimeout(2000);
        await this.hardLoc.click();
        await this.flexLoc.click();

        // AI Self-Healing:
        // The original locator is intentionally broken.
        // AI will suggest a replacement if the locator fails.

        await healClick(this.page,this.week1,"page.getByText('A Week', { exact: true })");

        await this.month1.click();
        await this.datePick1.click();
        await this.unKnown.click();
        await this.searchBox.click();
    }

    async childRoom(numberOfChildren, ageDropdowns) {
        await this.child1.click(); // First child
        await this.page.waitForTimeout(300);


        for (let i = 1; i < numberOfChildren; i++) { // Remaining children
            await this.rechild.click();
            await this.page.waitForTimeout(300);
        }

        for (let i = 0; i < numberOfChildren; i++) {
            await ageDropdowns.nth(i + 1).selectOption(String(i + 1)); // Select ages: 1, 2, 3...
        }


        await this.button1.click(); // First click - text is "1"
        await this.page.waitForTimeout(300);


        for (let i = 0; i < 2; i++) { // Remaining clicks
            await this.room.click();
            await this.page.waitForTimeout(300);
        }
        await this.page.waitForTimeout(300);
        await this.button2.click();
        await this.page.waitForTimeout(300);
        await this.button3.click();
        await this.page.waitForTimeout(300);

    }

    async filtersU() { // In the Filters we need the AI Powered as well. Becauase sometimes filter's undo due to DOM rendering or something like that

        await this.swiming.click();
        await this.page.waitForTimeout(2000);
        await this.waitE.first();
        await this.airCondition.click();
        await this.page.waitForTimeout(2000);
        await this.reRender.waitFor({ state: 'visible' }); // Wait for filters to re-render before clicking distance filter
        await this.page.waitForTimeout(2000);
        await this.kilo.click();
        await this.page.waitForTimeout(2000);

    }

    async lowPrice() {

        // Wait for the first price to be visible
        await this.page.getByTestId("price-and-discounted-price").first().waitFor();

        // Grab all prices
        await this.page.waitForTimeout(400);

        const prices = await this.page.getByTestId("price-and-discounted-price").allTextContents();
        console.log('All Prices:', prices);

        // Get all property cards
        const propertyCards = this.page.getByTestId("property-card-container");

        const cardCount = await propertyCards.count();

        let lowestPrice = Infinity;
        let lowestPriceIndex = -1;

        // Loop through each property card
        for (let i = 0; i < cardCount; i++) {
            const card = propertyCards.nth(i);
            const priceText = await card.getByTestId("price-and-discounted-price").textContent();

            if (priceText) {
                const priceNumber = parseInt(
                    priceText.replace(/[^0-9]/g, '')
                );
                if (priceNumber < lowestPrice) {
                    lowestPrice = priceNumber;
                    lowestPriceIndex = i;
                }
            }
        }
        console.log(`Lowest Price: ${lowestPrice}`);
        return {
            lowestPrice,
            lowestPriceIndex
        };
    }

    async openLowestPricedProperty(lowestPriceIndex) {

        const propertyCards = this.page.getByTestId(
            "property-card-container"
        );

        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            propertyCards
                .nth(lowestPriceIndex)
                .getByTestId("availability-cta-btn")
                .click()
        ]);

        await newPage.waitForLoadState();
        return newPage;
    }
    async validatePropertyPage(newPage, lowestPrice) {

        // Wait for new tab to load
        await newPage.waitForLoadState();

        const secondPagePriceText = await newPage.locator(".prco-valign-middle-helper").nth(0).textContent();
        const secondPagePrice = Number(secondPagePriceText.replace(/\D/g, ''));
        console.log("Second Page Price:", secondPagePrice);

        // Verify both prices match
        await expect(secondPagePrice).toBe(lowestPrice);
        console.log("Both Page Price Matched");

        // Reserve the property
        await this.page.waitForTimeout(2000);
        await newPage.getByRole('link', { name: 'Reserve' }).click();
        await this.page.waitForTimeout(2000);
        await newPage.getByRole('button', { name: "I'll reserve" }).click();
    }

}

module.exports = { HotelBook };