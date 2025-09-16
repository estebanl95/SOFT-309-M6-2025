export class ContactUsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.phoneLink = page.locator('.fa.fa-phone');
    this.nameInput = page.locator('#input-name');
    this.emailInput = page.locator('#input-email');
    this.enquiryInput = page.locator('#input-enquiry');
    this.submitButton = page.locator('input[value="Submit"]');
    this.homePageLink = page.locator('header a[href="https://tutorialsninja.com/demo/index.php?route=common/home"]');
    this.nameErrorMessage = page.locator('body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > form:nth-child(4) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)');
    this.emailErrorMessage = page.locator('body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > form:nth-child(4) > fieldset:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2)');
    this.enquiryErrorMessage = page.locator('body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > form:nth-child(4) > fieldset:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2)');

  }

  // Singleton implementation
  static #instance;

  /**
   * Returns the singleton instance for the given page.
   * @param {import('@playwright/test').Page} page
   */
  static getInstance(page) {
    if (!ContactUsPage.#instance || ContactUsPage.#instance.page !== page) {
      // Creates a new instance if it doesn't exist or if it's a different page
      ContactUsPage.#instance = new ContactUsPage(page);
    }
    return ContactUsPage.#instance;
  }

  async clickPhoneLink() {
    await this.phoneLink.waitFor({ state: 'visible' });
    await this.phoneLink.click();
  }

  async fillContactFormIncomplete(name, email, message) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.enquiryInput.fill(message);
  }

  async fillContactForm(name, email, message) {
    await this.nameInput.waitFor({ state: 'visible' });
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.enquiryInput.fill(message);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  static reset() {
    ContactUsPage.#instance = null;
  }

}   