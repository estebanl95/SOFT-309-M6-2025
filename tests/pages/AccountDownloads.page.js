export class AccountDownloadsPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.locator("div[id='logo'] h1 a");
        this.accountDownloadsTitle = page.locator("div[id='content'] h1");
        this.continueButton = page.locator(".btn.btn-primary");
    }

    static #instance;

    static getInstance(page) {
        if (!AccountDownloadsPage.#instance || AccountDownloadsPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            AccountDownloadsPage.#instance = new AccountDownloadsPage(page);
        }
        return AccountDownloadsPage.#instance;
    }

    static reset() {
        AccountDownloadsPage.#instance = null;
    }

}