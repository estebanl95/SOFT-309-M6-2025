export class ComponentsScannerPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!ComponentsScannerPage.#instance || ComponentsScannerPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            ComponentsScannerPage.#instance = new ComponentsScannerPage(page);
        }
        return ComponentsScannerPage.#instance;
    }

    static reset() {
        ComponentsScannerPage.#instance = null;
    }
}