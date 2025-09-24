export class DevicesPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!DevicesPage.#instance || DevicesPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            DevicesPage.#instance = new DevicesPage(page);
        }
        return DevicesPage.#instance;
    }

    static reset() {
        DevicesPage.#instance = null;
    }
}