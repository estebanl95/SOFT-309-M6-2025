export class LoginPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator("div[id='content'] h1");
    this.homePageLink = page.getByRole('link', { name: 'Qafox.com' });

  }

  static #instance;

  static getInstance(page) {
    if (!LoginPage.#instance || LoginPage.#instance.page !== page) {
      // Creates a new instance if it doesn't exist or if it's a different page
      LoginPage.#instance = new LoginPage(page);
    }
    return LoginPage.#instance;
  }

  static reset() {
    LoginPage.#instance = null;
  }
}