export class ReturnsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator("div[id='content'] h1");
    this.homePageLink = page.locator('header a[href="https://tutorialsninja.com/demo/index.php?route=common/home"]');
  }

  static #instance;

  static getInstance(page) {
    if (!ReturnsPage.#instance || ReturnsPage.#instance.page !== page) {
      // Creates a new instance if it doesn't exist or if it's a different page
      ReturnsPage.#instance = new ReturnsPage(page);
    }
    return ReturnsPage.#instance;
  }

  static reset() {
    ReturnsPage.#instance = null;
  }
}