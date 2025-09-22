export class LoginPage {
  constructor(page) {
    this.page = page;
    this.homePageLink = page.locator('header a[href="https://tutorialsninja.com/demo/index.php?route=common/home"]');
    this.inputEmailAddress = page.locator('#input-email');
    this.inputPassword = page.locator('#input-password');
    this.forgottenPasswordLink = page.locator('div[class="form-group"] a');
    this.loginButton = page.locator('input[value="Login"]');
    this.warningMessage = page.locator('.alert.alert-danger.alert-dismissible')
  }

  static #instance;

  static getInstance(page) {
    if (!LoginPage.#instance || LoginPage.#instance.page !== page) {
      // Creates a new instance if it doesn't exist or if it's a different page
      LoginPage.#instance = new LoginPage(page);
    }
    return LoginPage.#instance;
  }

  async submitLoginwithBlankCredentials() {
    await this.loginButton.waitFor({ state: 'visible' });
    await this.loginButton.click();
  }

  async submitIncorrectLogin(email, password) {
    await this.loginButton.waitFor({ state: 'visible' });
    await this.inputEmailAddress.fill(email);
    await this.inputPassword.fill(password);
    await this.loginButton.click();
  }

  async submitLogin(email, password) {
    await this.loginButton.waitFor({ state: 'visible' });
    await this.inputEmailAddress.fill(email);
    await this.inputPassword.fill(password);
    await this.loginButton.click();
  }





  static reset() {
    LoginPage.#instance = null;
  }
}