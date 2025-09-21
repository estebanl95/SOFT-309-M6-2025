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
    this.homePageLink = page.locator('header a[href="https://tutorialsninja.com/demo/index.php?route=common/home"]');

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

    this.currencyDropdown = page.locator('button[class="btn btn-link dropdown-toggle"]');
    this.currencySymbol = page.locator('button[class="btn btn-link dropdown-toggle"] strong');
    this.euroCurrency = page.locator('button[name="EUR"]');
    this.poundSterlingCurrency = page.locator('button[name="GBP"]');
    this.usDollarCurrency = page.locator('button[name="USD"]');

    this.cartButton = page.locator('.btn.btn-inverse.btn-block.btn-lg.dropdown-toggle');

    this.macBookWishListButton = page.locator('button[type="button"][data-toggle="tooltip"][onclick="wishlist.add(\'43\');"]');
    this.iPhoneWishListButton = page.locator('button[type="button"][data-toggle="tooltip"][onclick="wishlist.add(\'40\');"]');
    this.appleCinemaWishListButton = page.locator('button[type="button"][data-toggle="tooltip"][onclick="wishlist.add(\'42\');"]');
    this.canonCameraWishListButton = page.locator('button[type="button"][data-toggle="tooltip"][onclick="wishlist.add(\'30\');"]');
    this.wishListAlert = page.locator('.alert.alert-success.alert-dismissible');

    this.desktopsMenuItem = page.locator('.dropdown-toggle[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=20"]');
    this.pcMenuOption = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=20_26"  ]');
    this.macMenuOption = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27"]');
    this.showAllDesktops = page.getByRole('link', { name: 'Show AllDesktops' });
    this.laptopsMenuItem = page.locator('.dropdown-toggle[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=18"]');
    this.macsOption = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=18_46"]');
    this.windowsOption = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=18_45"]');
    this.showAllLaptops = page.getByRole('link', { name: 'Show AllLaptops & Notebooks' });
    this.componentsMenuItem = page.locator('.dropdown-toggle[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=25"]');
    this.miceAndTrackballsOption = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=25_29"]');
    this.monitorsOption = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=25_28"]');
    this.printersOption = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=25_30"]');
    this.scannersOption = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=25_31"]');
    this.webCamerasOption = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=25_32"]');
    this.showAllComponents = page.getByRole('link', { name: 'Show AllComponents' });
    this.tabletsMenuItem = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=57"]');
    this.softwareMenuItem = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=17"]');
    this.phonesMenuItem = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=24"]');
    this.camerasMenuItem = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=33"]');
    this.mp3PlayersMenuItem = page.locator('.dropdown-toggle[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=34"]');
    this.mp3PlayerOption11 = page.locator('a[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=34_43"]');
    this.showAllMP3Players = page.getByRole('link', { name: 'Show AllMP3 Players' });

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


  // Currency Dropdown
  async selectEuroCurrency() {
    await this.currencyDropdown.waitFor({ state: 'visible' });
    await this.currencyDropdown.click();
    await this.euroCurrency.click();
  }

  async selectPoundSterlingCurrency() {
    await this.currencyDropdown.waitFor({ state: 'visible' });
    await this.currencyDropdown.click();
    await this.poundSterlingCurrency.click();
  }

  async selectUsDollarCurrency() {
    await this.currencyDropdown.waitFor({ state: 'visible' });
    await this.currencyDropdown.click();
    await this.usDollarCurrency.click();
  }

  // Wish List logic for unsubscribed users
  async addMacBookToWishList() {
    await this.macBookWishListButton.waitFor({ state: 'visible' });
    await this.macBookWishListButton.click();
  }

  async addIPhoneToWishList() {
    await this.iPhoneWishListButton.waitFor({ state: 'visible' });
    await this.iPhoneWishListButton.click();
  }

  async addAppleCinemaToWishList() {
    await this.appleCinemaWishListButton.waitFor({ state: 'visible' });
    await this.appleCinemaWishListButton.click();
  }

  async addCanonCameraToWishList() {
    await this.canonCameraWishListButton.waitFor({ state: 'visible' });
    await this.canonCameraWishListButton.click();
  }

  // Navigation through the top menu
  async navigateToDesktopsPC() {
    await this.desktopsMenuItem.waitFor({ state: 'visible' });
    await this.desktopsMenuItem.hover();
    await this.pcMenuOption.click();
  }

  async navigateToDesktopsMac() {
    await this.desktopsMenuItem.waitFor({ state: 'visible' });
    await this.desktopsMenuItem.hover();
    await this.macMenuOption.click();
  }

  async navigateToAllDesktops() {
    await this.desktopsMenuItem.waitFor({ state: 'visible' });
    await this.desktopsMenuItem.hover();
    await this.showAllDesktops.click();
  }

  async navigateToLaptopsMacs() {
    await this.laptopsMenuItem.waitFor({ state: 'visible' });
    await this.laptopsMenuItem.hover();
    await this.macsOption.click();
  }

  async navigateToLaptopsWindows() {
    await this.laptopsMenuItem.waitFor({ state: 'visible' });
    await this.laptopsMenuItem.hover();
    await this.windowsOption.click();
  }

  async navigateToAllLaptops() {
    await this.laptopsMenuItem.waitFor({ state: 'visible' });
    await this.laptopsMenuItem.hover();
    await this.showAllLaptops.click();
  }
  
  async navigateToComponentsMiceAndTrackballs() {
    await this.componentsMenuItem.waitFor({ state: 'visible' });
    await this.componentsMenuItem.hover();
    await this.miceAndTrackballsOption.click();
  }   

  async navigateToComponentsMonitors() {
    await this.componentsMenuItem.waitFor({ state: 'visible' });
    await this.componentsMenuItem.hover();
    await this.monitorsOption.click();
  }
  
  async navigateToComponentsPrinters() {
    await this.componentsMenuItem.waitFor({ state: 'visible' });
    await this.componentsMenuItem.hover();
    await this.printersOption.click();
  } 

  async navigateToComponentsScanners() {
    await this.componentsMenuItem.waitFor({ state: 'visible' });
    await this.componentsMenuItem.hover();
    await this.scannersOption.click();
  }
  async navigateToComponentsWebCameras() {
    await this.componentsMenuItem.waitFor({ state: 'visible' });
    await this.componentsMenuItem.hover();
    await this.webCamerasOption.click();
  } 

  async navigateToAllComponents() { 
    await this.componentsMenuItem.waitFor({ state: 'visible' });
    await this.componentsMenuItem.hover();
    await this.showAllComponents.click();
  }

  async navigateToTablets() {
    await this.tabletsMenuItem.waitFor({ state: 'visible' });
    await this.tabletsMenuItem.click();
  }

  async navigateToSoftware() {
    await this.softwareMenuItem.waitFor({ state: 'visible' });
    await this.softwareMenuItem.click();
  }

  async navigateToPhones() {
    await this.phonesMenuItem.waitFor({ state: 'visible' });
    await this.phonesMenuItem.click();
  }

  async navigateToCameras() {
    await this.camerasMenuItem.waitFor({ state: 'visible' });
    await this.camerasMenuItem.click();
  }

  async navigateToMP3PlayersOption11() {
    await this.mp3PlayersMenuItem.waitFor({ state: 'visible' });
    await this.mp3PlayersMenuItem.hover();
    await this.mp3PlayerOption11.click();
  }

  async navigateToAllMP3Players() {
    await this.mp3PlayersMenuItem.waitFor({ state: 'visible' });
    await this.mp3PlayersMenuItem.hover();
    await this.showAllMP3Players.click();
  }

  static reset() {
    HomePage.#instance = null;
  }




}
