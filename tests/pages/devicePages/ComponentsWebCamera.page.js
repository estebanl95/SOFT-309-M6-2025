export class ComponentsWebCameraPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!ComponentsWebCameraPage.#instance || ComponentsWebCameraPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            ComponentsWebCameraPage.#instance = new ComponentsWebCameraPage(page);
        }
        return ComponentsWebCameraPage.#instance;
    }

    static reset() {
        ComponentsWebCameraPage.#instance = null;
    }
}