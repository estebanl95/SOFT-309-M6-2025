export class AffiliatesPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator("div[id='content'] h1");
    this.homePageLink = page.locator('header a[href="https://tutorialsninja.com/demo/index.php?route=common/home"]');
  }

  static #instance;

  static getInstance(page) {
    if (!AffiliatesPage.#instance || AffiliatesPage.#instance.page !== page) {
      // Creates a new instance if it doesn't exist or if it's a different page
      AffiliatesPage.#instance = new AffiliatesPage(page);
    }
    return AffiliatesPage.#instance;
  }

  static reset() {
    AffiliatesPage.#instance = null;
  }
}