export class DesktopPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!DesktopPage.#instance || DesktopPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            DesktopPage.#instance = new DesktopPage(page);
        }
        return DesktopPage.#instance;
    }

    static reset() {
        DesktopPage.#instance = null;
    }
}