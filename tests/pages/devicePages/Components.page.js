export class ComponentsPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!ComponentsPage.#instance || ComponentsPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            ComponentsPage.#instance = new ComponentsPage(page);
        }
        return ComponentsPage.#instance;
    }

    static reset() {
        ComponentsPage.#instance = null;
    }
}