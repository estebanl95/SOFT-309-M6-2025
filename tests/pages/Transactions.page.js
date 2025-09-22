export class TransactionsPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.locator('div[id="logo"] h1 a');
        this.transactionsTitle = page.locator('div[id="content"] h1');
        this.continueButton = page.locator('.btn.btn-primary');
    }

    static #instance;

    static getInstance(page) {
        if (!TransactionsPage.#instance || TransactionsPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            TransactionsPage.#instance = new TransactionsPage(page);
        }
        return TransactionsPage.#instance;
    }

    static reset() {
        TransactionsPage.#instance = null;
    }

}