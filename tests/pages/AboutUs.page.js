export class AboutUsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('div[id="content"] h1');
    this.homePageLink = page.getByRole('link', { name: 'Qafox.com' });
  }

  static #instance;

  static getInstance(page) {
    if (!AboutUsPage.#instance || AboutUsPage.#instance.page !== page) {
      // Creates a new instance if it doesn't exist or if it's a different page
      AboutUsPage.#instance = new AboutUsPage(page);
    }
    return AboutUsPage.#instance;
  }

  static reset() {
    AboutUsPage.#instance = null;
  }
}