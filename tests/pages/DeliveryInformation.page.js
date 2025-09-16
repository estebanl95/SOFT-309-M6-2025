export class DeliveryInformationPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('div[id="content"] h1');
    this.homePageLink = page.locator('header a[href="https://tutorialsninja.com/demo/index.php?route=common/home"]');
  }

  static #instance;

  static getInstance(page) {
    if (!DeliveryInformationPage.#instance || DeliveryInformationPage.#instance.page !== page) {
      // Creates a new instance if it doesn't exist or if it's a different page
      DeliveryInformationPage.#instance = new DeliveryInformationPage(page);
    }
    return DeliveryInformationPage.#instance;
  }

  static reset() {
    DeliveryInformationPage.#instance = null;
  }
}