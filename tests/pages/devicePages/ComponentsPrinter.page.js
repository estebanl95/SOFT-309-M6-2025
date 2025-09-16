export class ComponentsPrinterPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!ComponentsPrinterPage.#instance || ComponentsPrinterPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            ComponentsPrinterPage.#instance = new ComponentsPrinterPage(page);
        }
        return ComponentsPrinterPage.#instance;
    }

    static reset() {
        ComponentsPrinterPage.#instance = null;
    }
}