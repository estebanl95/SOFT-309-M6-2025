export class ComponentsMicePage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!ComponentsMicePage.#instance || ComponentsMicePage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            ComponentsMicePage.#instance = new ComponentsMicePage(page);
        }
        return ComponentsMicePage.#instance;
    }

    static reset() {
        ComponentsMicePage.#instance = null;
    }
}