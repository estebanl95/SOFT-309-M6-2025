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

    this.aboutUsLink = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4"]');
    this.deliveryInformationLink = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6"]');
    this.privacyPolicyLink = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3"]');
    this.termsConditionsLink = page.locator('footer a[href="https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5"]');
    this.contactUsLink = page.locator('footer a[href="https://tutorialsninja.com/demo/index.php?route=information/contact"]');
    this.returnsLink = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=account/return/add"]');
    this.sitemapLink = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=information/sitemap"]');
    this.brandsLink = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=product/manufacturer"]');
    this.giftCertificatesLink = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=account/voucher"]');
    this.affiliateLink = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=affiliate/login"]');
    this.specialsLink = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=product/special"]');
    this.myAccountFooterLink = page.locator('body > footer:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)');
    this.orderHistoryFooterLink = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=account/order"]');
    this.wishListFooterLink = page.locator('body > footer:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)');
    this.newsletterFooterLink = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=account/newsletter"]');

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

  // Footer Navigation

  async clickAboutUsLink() {
    await this.aboutUsLink.waitFor({ state: 'visible' });
    await this.aboutUsLink.click();
  }

  async clickDeliveryInformationLink() {
    await this.deliveryInformationLink.waitFor({ state: 'visible' });
    await this.deliveryInformationLink.click();
  }

  async clickPrivacyPolicyLink() {
    await this.privacyPolicyLink.waitFor({ state: 'visible' });
    await this.privacyPolicyLink.click();
  }

  async clickTermsConditionsLink() {
    await this.termsConditionsLink.waitFor({ state: 'visible' });
    await this.termsConditionsLink.click();
  }

  async clickContactUsLink() {
    await this.contactUsLink.waitFor({ state: 'visible' });
    await this.contactUsLink.click();
  }

  async clickReturnsLink() {
    await this.returnsLink.waitFor({ state: 'visible' });
    await this.returnsLink.click();
  }

  async clickSiteMapLink() {
    await this.sitemapLink.waitFor({ state: 'visible' });
    await this.sitemapLink.click();
  }

  async clickBrandsLink() {
    await this.brandsLink.waitFor({ state: 'visible' });
    await this.brandsLink.click();
  }

  async clickGiftCertificatesLink() {
    await this.giftCertificatesLink.waitFor({ state: 'visible' });
    await this.giftCertificatesLink.click();
  }

  async clickAffiliateLink() {
    await this.affiliateLink.waitFor({ state: 'visible' });
    await this.affiliateLink.click();
  }

  async clickSpecialsLink() {
    await this.specialsLink.waitFor({ state: 'visible' });
    await this.specialsLink.click();
  }

  async clickMyAccountFooterLink() {
    await this.myAccountFooterLink.waitFor({ state: 'visible' });
    await this.myAccountFooterLink.click();
  }

  async clickOrderHistoryFooterLink() {
    await this.orderHistoryFooterLink.waitFor({ state: 'visible' });
    await this.orderHistoryFooterLink.click();
  }

  async clickWishListFooterLink() {
    await this.wishListFooterLink.waitFor({ state: 'visible' });
    await this.wishListFooterLink.click();
  }

  async clickNewsletterFooterLink() {
    await this.newsletterFooterLink.waitFor({ state: 'visible' });
    await this.newsletterFooterLink.click();
  }


  static reset() {
    HomePage.#instance = null;
  }




}
