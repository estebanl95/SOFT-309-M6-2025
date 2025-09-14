export class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.phoneLink = page.locator('.fa.fa-phone');
    this.myAccountDropdown = page.locator('a[title="My Account"] span[class="hidden-xs hidden-sm hidden-md"]');
    this.registerLink = page.locator('text=Register');
    this.loginLink = page.locator('text=Login');
    this.wishListLink = page.locator('a[id="wishlist-total"] span[class="hidden-xs hidden-sm hidden-md"]');
  }

  // Singleton implementation
  static #instance;

  /**
   * Returns the singleton instance for the given page.
   * @param {import('@playwright/test').Page} page
   */
  static getInstance(page) {
    if (!HomePage.#instance) {
      HomePage.#instance = new HomePage(page);
    }
    return HomePage.#instance;
  }

//   async goto() {
//     await this.page.goto('/');
//   }

  async clickPhoneLink() {
    await this.phoneLink.waitFor({ state: 'visible' });
    await this.phoneLink.click();
  }
}
