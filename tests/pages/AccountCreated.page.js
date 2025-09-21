export class AccountCreatedPage {
    constructor(page) {
        this.page = page;
        this.accountCreatedTitle = page.locator('div[id="content"] h1');
        this.continueButton = page.locator('.btn.btn-primary');
    }

    static #instance;

    static getInstance(page) {
        if (!AccountCreatedPage.#instance || AccountCreatedPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            AccountCreatedPage.#instance = new AccountCreatedPage(page);
        }
        return AccountCreatedPage.#instance;
    }

    static reset() {
        AccountCreatedPage.#instance = null;
    }
}
