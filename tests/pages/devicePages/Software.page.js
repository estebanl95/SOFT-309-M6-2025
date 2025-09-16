export class SoftwarePage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!SoftwarePage.#instance || SoftwarePage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            SoftwarePage.#instance = new SoftwarePage(page);
        }
        return SoftwarePage.#instance;
    }

    static reset() {
        SoftwarePage.#instance = null;
    }
}