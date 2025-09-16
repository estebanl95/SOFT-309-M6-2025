export class SiteMapPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator("div[id='content'] h1");
    this.homePageLink = page.locator('header a[href="https://tutorialsninja.com/demo/index.php?route=common/home"]');
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