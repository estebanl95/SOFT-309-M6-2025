export class LaptopWindowsPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!LaptopWindowsPage.#instance || LaptopWindowsPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            LaptopWindowsPage.#instance = new LaptopWindowsPage(page);
        }
        return LaptopWindowsPage.#instance;
    }

    static reset() {
        LaptopWindowsPage.#instance = null;
    }
}