export class RegisterAccountPage {
  constructor(page) {
    this.page = page;
    this.homePageLink = page.getByRole('link', { name: 'Qafox.com' });
    this.title = page.locator("div[id='content'] h1");
    this.firstName = page.locator("#input-firstname");
    this.lastName = page.locator("#input-lastname");
    this.email = page.locator("#input-email");
    this.telephone = page.locator("#input-telephone");
    this.password = page.locator("#input-password");
    this.confirmPassword = page.locator("#input-confirm");
    this.subscribeYes = page.locator("input[value='1'][name='newsletter']");
    this.subscribeNo = page.locator("input[value='0'][name='newsletter']");
    this.privacyPolicyLink = page.locator("a[class='agree'] b");
    this.privacyPolicyCheckbox = page.locator("input[value='1'][name='agree']");
    this.continueButton = page.locator("input[value='Continue']");
    this.privacyPolicyModalTitle = page.locator(".modal-title");
    this.closeModalButton = page.locator(".close");
  }

  static #instance;

  static getInstance(page) {
    if (!RegisterAccountPage.#instance || RegisterAccountPage.#instance.page !== page) {
      // Creates a new instance if it doesn't exist or if it's a different page
      RegisterAccountPage.#instance = new RegisterAccountPage(page);
    }
    return RegisterAccountPage.#instance;
  }

  static reset() {
    RegisterAccountPage.#instance = null;
  }
}