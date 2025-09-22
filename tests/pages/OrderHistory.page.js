export class OrderHistoryPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.locator('div[id="logo"] h1 a');
        this.orderHistoryTitle = page.locator('div[id="content"] h1');
        this.continueButton = page.locator('.btn.btn-primary');
    }

    static #instance;

    static getInstance(page) {
        if (!OrderHistoryPage.#instance || OrderHistoryPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            OrderHistoryPage.#instance = new OrderHistoryPage(page);
        }
        return OrderHistoryPage.#instance;
    }

    static reset() {
        OrderHistoryPage.#instance = null;
    }

}