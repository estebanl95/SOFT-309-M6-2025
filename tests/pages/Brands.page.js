export class BrandsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator("div[id='content'] h1");
    this.homePageLink = page.getByRole('link', { name: 'Qafox.com' });
  }

  static #instance;

  static getInstance(page) {
    if (!BrandsPage.#instance || BrandsPage.#instance.page !== page) {
      // Creates a new instance if it doesn't exist or if it's a different page
      BrandsPage.#instance = new BrandsPage(page);
    }
    return BrandsPage.#instance;
  }

  static reset() {
    BrandsPage.#instance = null;
  }
}