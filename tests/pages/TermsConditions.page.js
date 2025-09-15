export class TermsConditionsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator("div[id='content'] h1");
    this.homePageLink = page.getByRole('link', { name: 'Qafox.com' });
  }

  static #instance;

  static getInstance(page) {
    if (!TermsConditionsPage.#instance || TermsConditionsPage.#instance.page !== page) {
      // Creates a new instance if it doesn't exist or if it's a different page
      TermsConditionsPage.#instance = new TermsConditionsPage(page);
    }
    return TermsConditionsPage.#instance;
  }

  static reset() {
    TermsConditionsPage.#instance = null;
  }
}