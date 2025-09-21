export class LogoutPage {
    constructor(page) {
        this.page = page;
        this.accountLogoutTitle = page.locator('div[id="content"] h1');
        this.continueButton = page.locator('.btn.btn-primary');
    }

    static #instance;

    static getInstance(page) {
        if (!LogoutPage.#instance || LogoutPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            LogoutPage.#instance = new LogoutPage(page);
        }
        return LogoutPage.#instance;
    }

    static reset() {
        LogoutPage.#instance = null;
    }
}
