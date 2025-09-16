export class LaptopPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!LaptopPage.#instance || LaptopPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            LaptopPage.#instance = new LaptopPage(page);
        }
        return LaptopPage.#instance;
    }

    static reset() {
        LaptopPage.#instance = null;
    }
}