export class ComponentsMonitorPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!ComponentsMonitorPage.#instance || ComponentsMonitorPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            ComponentsMonitorPage.#instance = new ComponentsMonitorPage(page);
        }
        return ComponentsMonitorPage.#instance;
    }

    static reset() {
        ComponentsMonitorPage.#instance = null;
    }
}