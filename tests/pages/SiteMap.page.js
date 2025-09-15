export class SiteMapPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator("div[id='content'] h1");
    this.homePageLink = page.getByRole('link', { name: 'Qafox.com' });
  }

  static #instance;

  static getInstance(page) {
    if (!SiteMapPage.#instance || SiteMapPage.#instance.page !== page) {
      // Creates a new instance if it doesn't exist or if it's a different page
      SiteMapPage.#instance = new SiteMapPage(page);
    }
    return SiteMapPage.#instance;
  }

  static reset() {
    SiteMapPage.#instance = null;
  }
}