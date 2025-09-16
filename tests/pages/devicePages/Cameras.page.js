export class CamerasPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!CamerasPage.#instance || CamerasPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            CamerasPage.#instance = new CamerasPage(page);
        }
        return CamerasPage.#instance;
    }

    static reset() {
        CamerasPage.#instance = null;
    }
}