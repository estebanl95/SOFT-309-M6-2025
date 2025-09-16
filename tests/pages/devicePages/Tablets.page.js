export class TabletsPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.getByRole('header a', { name: 'Qafox.com' });
    }

    static #instance;

    static getInstance(page) {
        if (!TabletsPage.#instance || TabletsPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            TabletsPage.#instance = new TabletsPage(page);
        }
        return TabletsPage.#instance;
    }

    static reset() {
        TabletsPage.#instance = null;
    }
}