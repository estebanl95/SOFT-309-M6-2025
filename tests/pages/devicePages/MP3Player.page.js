export class MP3PlayerPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!MP3PlayerPage.#instance || MP3PlayerPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            MP3PlayerPage.#instance = new MP3PlayerPage(page);
        }
        return MP3PlayerPage.#instance;
    }

    static reset() {
        MP3PlayerPage.#instance = null;
    }
}