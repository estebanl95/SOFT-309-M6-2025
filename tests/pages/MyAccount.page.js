export class MyAccountPage {
    constructor(page) {
        this.page = page;
        this.myAccountTitle = page.locator('h2:nth-child(1)');
        this.continueButton = page.locator('.btn.btn-primary');
        this.homePageLink = page.locator('div[id="logo"] h1 a');
    }

    static #instance;

    static getInstance(page) {
        if (!MyAccountPage.#instance || MyAccountPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            MyAccountPage.#instance = new MyAccountPage(page);
        }
        return MyAccountPage.#instance;
    }

    static reset() {
        MyAccountPage.#instance = null;
    }
}
