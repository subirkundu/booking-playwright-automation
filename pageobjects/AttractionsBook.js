const { expect } = require('@playwright/test');

class AttractionsBook {
    constructor(page) {
        this.page = page;
        this.dismiss3 = page.getByRole('button', { name: 'Dismiss sign-in info.' });
        this.attractions = page.locator('#attractions');
        this.destination = page.getByPlaceholder('Where are you going?');
        this.bigB = page.getByText('Big Ben', { exact: true });

        //Filters
        this.tours = page.locator('label').filter({ hasText: 'Tours' });
        this.fCancel = page.locator('label').filter({ hasText: 'Free cancellation' });
        this.english = page.locator('label').filter({ hasText: 'English' });
        this.night = page.getByText('Evening and night');
        this.bReview = page.getByText('Best reviewed', { exact: true });
        //Filters End

    }

    async goTo() {
        await this.page.goto('https://www.booking.com/');
    }

    async searchAttraction() {
        await this.dismiss3.click();
        await this.attractions.click();
        await this.page.waitForLoadState('networkidle'); // Wait for page to fully load
        await this.destination.waitFor({ state: 'visible' }); // Wait for destination input to be ready
        await expect(this.destination).toBeEnabled();
        await this.page.waitForTimeout(500);
        await this.destination.click();
        await this.destination.pressSequentially('Big Ben', { delay: 100 });
        await this.bigB.click();
    }

    async selectDate() {

        const today = new Date();

        const startDate = new Date(today);
        startDate.setDate(today.getDate() + 10);

        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 5);

        // Convert Date object to: Like: "Friday, September 4, 2026"
        const formatAttractionDate = (date) =>
            date.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            });

        const startDateLabel = formatAttractionDate(startDate);
        const endDateLabel = formatAttractionDate(endDate);

        console.log('Start Date:', startDateLabel);
        console.log('End Date:', endDateLabel);

        // Select Start Date

        // CHANGED: Use getByRole('checkbox') instead of getByLabel().
        // Reason: Booking.com has two elements with the same aria-label for a date: gridcell + checkbox. getByLabel() matched both and caused a strict-mode error.
        const startDateLocator = this.page.getByRole('checkbox', {name: startDateLabel});

        while (!(await startDateLocator.isVisible())) {

            await this.page.getByRole('button', { name: 'Next month' }).click();
        }

        await startDateLocator.click();

        // Select End Date
        // CHANGED: Same fix here: target the actual selectable checkbox instead of the ambiguous aria-label.
        const endDateLocator = this.page.getByRole('checkbox', {name: endDateLabel});

        while (!(await endDateLocator.isVisible())) {
            await this.page.getByRole('button', { name: 'Next month' }).click();
        }

        await endDateLocator.click();
        await this.page.getByTestId('search-button').click();
        await this.page.waitForTimeout(400);
    }

    async filtersA() {

        await this.tours.click();
        await this.page.waitForTimeout(400);
        await this.fCancel.click();
        await this.page.waitForTimeout(400);
        await this.english.click();
        await this.page.waitForTimeout(400);
        await this.night.click();
        await this.page.waitForTimeout(400);
        await this.bReview.click();
    }

    async findLowestPriceAndValidate() {

        // Get all text values from the attraction cards
        await this.page.waitForTimeout(2000);
        const values = await this.page.locator('.bc946a29db').allTextContents();

        // Keep only "Current price from ..." values and convert them into numbers
        const prices = values.filter(value => value.startsWith('Current price from')).map(value => Number(value.replace(/[^\d]/g, '')));
        console.log('Attraction Prices:', prices);


        // Find lowest price
        const lowestPrice = Math.min(...prices);
        const lowestPriceIndex = prices.indexOf(lowestPrice);
        console.log('Lowest Price:', lowestPrice);

        const cards = this.page.locator('.css-1u3fncl'); // Get all attraction cards
        const card = cards.nth(lowestPriceIndex); // Select the card that belongs to the lowest price
        const previousPageTitle = await card.getByTestId('card-title').textContent(); // Get title from the results page

        // Define the new-page promise BEFORE clicking
        const [page1] = await Promise.all([

            this.page.context().waitForEvent('page'),
            card.getByTestId('card-title').click()

        ]);

        await page1.waitForLoadState('networkidle');
        const newPageTitle = await page1.locator('h1:visible').textContent(); // Get title from the new page

        console.log('Previous Page Title:', previousPageTitle.trim());
        console.log('New Page Title:', newPageTitle.trim());

        expect(newPageTitle.trim()).toBe(previousPageTitle.trim()); // Verify both titles match
        console.log('Title Verified! Both titles match: ' + newPageTitle.trim());
    }


}

module.exports = { AttractionsBook };