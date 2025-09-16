export class SpecialsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator("div[id='content'] h2");
    this.homePageLink = page.locator('header a[href="https://tutorialsninja.com/demo/index.php?route=common/home"]');
  }

  static #instance;

  static getInstance(page) {
    if (!SpecialsPage.#instance || SpecialsPage.#instance.page !== page) {
      // Creates a new instance if it doesn't exist or if it's a different page
      SpecialsPage.#instance = new SpecialsPage(page);
    }
    return SpecialsPage.#instance;
  }

  static reset() {
    SpecialsPage.#instance = null;
  }
}