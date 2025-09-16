export class DesktopPCPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!DesktopPCPage.#instance || DesktopPCPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            DesktopPCPage.#instance = new DesktopPCPage(page);
        }
        return DesktopPCPage.#instance;
    }

    static reset() {
        DesktopPCPage.#instance = null;
    }
}