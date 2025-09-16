export class DesktopMacPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!DesktopMacPage.#instance || DesktopMacPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            DesktopMacPage.#instance = new DesktopMacPage(page);
        }
        return DesktopMacPage.#instance;
    }

    static reset() {
        DesktopMacPage.#instance = null;
    }
}