export class ContactUsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.title = page.locator('div[id="content"] h1');
    this.phoneLink = page.locator('.fa.fa-phone');
    this.emailLink = page.locator('.fa.fa-envelope');
    this.contactForm = page.locator('form#contact-form');
    this.nameInput = page.locator('input[name="name"]');
    this.emailInput = page.locator('input[name="email"]');
    this.messageTextarea = page.locator('textarea[name="message"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.homePageLink = page.getByRole('link', { name: 'Qafox.com' });
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

  /**
   * Resets the singleton instance (useful for test teardown)
   */
  static reset() {
    ContactUsPage.#instance = null;
  }

  async clickPhoneLink() {
    await this.phoneLink.waitFor({ state: 'visible' });
    await this.phoneLink.click();
  }

  async clickEmailLink() {
    await this.emailLink.waitFor({ state: 'visible' });
    await this.emailLink.click();
  }

  async fillContactForm(name, email, message) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.messageTextarea.fill(message);
  }

  async submitForm() {
    await this.submitButton.click();
  }
}   