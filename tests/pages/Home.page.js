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
    this.shoppingCartLink = page.locator("a[title='Shopping Cart'] span[class='hidden-xs hidden-sm hidden-md']");
    this.checkoutLink = page.locator("a[title='Checkout'] span[class='hidden-xs hidden-sm hidden-md']");
    this.homePageLink = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=common/home"]');

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

  // Header Navigation

  async clickPhoneLink() {
    await this.phoneLink.waitFor({ state: 'visible' });
    await this.phoneLink.click();
  }

  async clickRegisterLink() {
    await this.myAccountDropdown.click();
    await this.registerLink.click();
  }

  async clickLoginLink() {
    await this.myAccountDropdown.click();
    await this.loginLink.click();
  }

  async clickWishListLink() {
    await this.wishListLink.waitFor({ state: 'visible' });
    await this.wishListLink.click();
  }

  async clickShoppingCartLink() {
    await this.shoppingCartLink.waitFor({ state: 'visible' });
    await this.shoppingCartLink.click();
  }

  async clickCheckoutLink() {
    await this.checkoutLink.waitFor({ state: 'visible' });
    await this.checkoutLink.click();
  }



  static reset() {
    HomePage.#instance = null;
  }




}
