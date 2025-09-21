export class RegisterAccountPage {
  constructor(page) {
    this.page = page;
    this.homePageLink = page.locator('header a[href="https://tutorialsninja.com/demo/index.php?route=common/home"]');
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
    this.privacyPolicyWarning = page.locator(".alert.alert-danger.alert-dismissible");
    this.passwordMismatchWarning = page.locator(".text-danger");
    this.emailAlreadyRegisteredWarning = page.locator(".alert.alert-danger.alert-dismissible");
  }

  static #instance;

  static getInstance(page) {
    if (!RegisterAccountPage.#instance || RegisterAccountPage.#instance.page !== page) {
      // Creates a new instance if it doesn't exist or if it's a different page
      RegisterAccountPage.#instance = new RegisterAccountPage(page);
    }
    return RegisterAccountPage.#instance;
  }

  async registerNewUser(firstName, lastName, email, telephone, password, confirmPassword) {
    await this.continueButton.waitFor({ state: 'visible' });
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.telephone.fill(telephone);
    await this.password.fill(password);
    await this.confirmPassword.fill(confirmPassword);
  }

  async clickPrivacyPolicyLink() {
    await this.privacyPolicyLink.click();
  }

  async closePrivacyPolicyModal() {
    await this.closeModalButton.click();
  }



  static reset() {
    RegisterAccountPage.#instance = null;
  }
}