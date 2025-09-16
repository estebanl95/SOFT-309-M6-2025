export class PrivacyPolicyPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator("div[id='content'] h1");
    this.homePageLink = page.locator('header a[href="https://tutorialsninja.com/demo/index.php?route=common/home"]');
  }

  static #instance;

  static getInstance(page) {
    if (!PrivacyPolicyPage.#instance || PrivacyPolicyPage.#instance.page !== page) {
      // Creates a new instance if it doesn't exist or if it's a different page
      PrivacyPolicyPage.#instance = new PrivacyPolicyPage(page);
    }
    return PrivacyPolicyPage.#instance;
  }

  static reset() {
    PrivacyPolicyPage.#instance = null;
  }
}