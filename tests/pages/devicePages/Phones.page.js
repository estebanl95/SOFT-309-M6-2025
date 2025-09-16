export class PhonesPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!PhonesPage.#instance || PhonesPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            PhonesPage.#instance = new PhonesPage(page);
        }
        return PhonesPage.#instance;
    }

    static reset() {
        PhonesPage.#instance = null;
    }
}