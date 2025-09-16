export class MP3PlayerItemPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!MP3PlayerItemPage.#instance || MP3PlayerItemPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            MP3PlayerItemPage.#instance = new MP3PlayerItemPage(page);
        }
        return MP3PlayerItemPage.#instance;
    }

    static reset() {
        MP3PlayerItemPage.#instance = null;
    }
}