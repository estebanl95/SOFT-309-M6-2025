export class GiftCertificatePage {
  constructor(page) {
    this.page = page;
    this.title = page.locator("div[id='content'] h1");
    this.homePageLink = page.locator('header a[href="https://tutorialsninja.com/demo/index.php?route=common/home"]');
  }

  static #instance;

  static getInstance(page) {
    if (!GiftCertificatePage.#instance || GiftCertificatePage.#instance.page !== page) {
      // Creates a new instance if it doesn't exist or if it's a different page
      GiftCertificatePage.#instance = new GiftCertificatePage(page);
    }
    return GiftCertificatePage.#instance;
  }

  static reset() {
    GiftCertificatePage.#instance = null;
  }
}