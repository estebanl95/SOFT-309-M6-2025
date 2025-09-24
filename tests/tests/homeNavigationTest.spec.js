import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Home.page';
import { ContactUsPage } from '../pages/ContactUs.page';
import { RegisterAccountPage } from '../pages/Register.page';
import { LoginPage } from '../pages/Login.page';
import { ShoppingCartPage } from '../pages/ShoppingCart.page';
import { AboutUsPage } from '../pages/AboutUs.page';
import { DeliveryInformationPage } from '../pages/DeliveryInformation.page';
import { PrivacyPolicyPage } from '../pages/PrivacyPolicy.page';
import { TermsConditionsPage } from '../pages/TermsConditions.page';
import { ReturnsPage } from '../pages/Returns.page';
import { SiteMapPage } from '../pages/SiteMap.page';
import { BrandsPage } from '../pages/Brands.page';
import { GiftCertificatePage } from '../pages/GiftCertificate.page';
import { AffiliatesPage } from '../pages/Affiliates.page';
import { SpecialsPage } from '../pages/Specials.page';
import { DesktopPage } from '../pages/devicePages/Desktop.page'; 
import { DevicesPage } from '../pages/devicePages/Devices.page';
import { captureTestMoment } from '../utils/screenshotUtils.js';

function getScreenshotPath(testName, stepName, browserName = 'chromium') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return `screenshots/${testName}/${browserName}/${timestamp}-${stepName}.png`;
}

let page;
let homePage;
let contactUsPage;
let registerPage;
let loginPage;
let shoppingCartPage;
let aboutUsPage;
let deliveryInformationPage;
let privacyPolicyPage;
let termsConditionsPage;
let returnsPage;
let siteMapPage;
let brandsPage;
let giftCertificatePage;
let affiliatesPage;
let specialsPage;
let desktops;
let devices;

test.describe('Home ', () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://tutorialsninja.com/demo/');
    homePage = HomePage.getInstance(page);
    contactUsPage = ContactUsPage.getInstance(page);
    registerPage = RegisterAccountPage.getInstance(page);
    loginPage = LoginPage.getInstance(page);
    shoppingCartPage = ShoppingCartPage.getInstance(page);
    aboutUsPage = AboutUsPage.getInstance(page);
    deliveryInformationPage = DeliveryInformationPage.getInstance(page);
    privacyPolicyPage = PrivacyPolicyPage.getInstance(page);
    termsConditionsPage = TermsConditionsPage.getInstance(page);
    returnsPage = ReturnsPage.getInstance(page);
    siteMapPage = SiteMapPage.getInstance(page);
    brandsPage = BrandsPage.getInstance(page);
    giftCertificatePage = GiftCertificatePage.getInstance(page);
    affiliatesPage = AffiliatesPage.getInstance(page);
    specialsPage = SpecialsPage.getInstance(page);
    desktops = DesktopPage.getInstance(page);
    devices = DevicesPage.getInstance(page);
  });

  test.beforeEach(async () => {
    await page.goto('https://tutorialsninja.com/demo/');
    HomePage.reset();
    ContactUsPage.reset();
    RegisterAccountPage.reset();
    LoginPage.reset();
    ShoppingCartPage.reset();
    AboutUsPage.reset();
    DeliveryInformationPage.reset();
    PrivacyPolicyPage.reset();
    TermsConditionsPage.reset();
    ReturnsPage.reset();
    SiteMapPage.reset();
    BrandsPage.reset();
    GiftCertificatePage.reset();
    AffiliatesPage.reset();
    SpecialsPage.reset();
    DesktopPage.reset();
    DevicesPage.reset();
  });

  test('tests the navigation of the header links', async ({ browserName }) => {
    await homePage.phoneLink.waitFor({ state: 'visible' });
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '01-homepage-header-links', browserName),
      fullPage: true 
    });
    
    await homePage.clickPhoneLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=information/contact");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '02-contact-us-page', browserName),
      fullPage: true 
    });
    await contactUsPage.homePageLink.click();

    await homePage.clickRegisterLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/register");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '03-register-page', browserName),
      fullPage: true 
    });
    await registerPage.homePageLink.click();

    await homePage.clickLoginLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '04-login-page', browserName),
      fullPage: true 
    });
    await loginPage.homePageLink.click();

    await homePage.clickWishListLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
    console.log("Wish List page displays the Login page, and this is expected behavior becaseuse user is not logged in.");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '05-wishlist-redirected-to-login', browserName),
      fullPage: true 
    });
    await loginPage.homePageLink.click();

    await homePage.clickShoppingCartLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=checkout/cart");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '06-shopping-cart-page', browserName),
      fullPage: true 
    });
    await shoppingCartPage.homePageLink.click();

    await homePage.clickCheckoutLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=checkout/cart");
    console.log("Checkout page displays the Shopping Cart page, and this is expected behavior because user is not logged in.");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '07-checkout-redirected-to-cart', browserName),
      fullPage: true 
    });
    await shoppingCartPage.homePageLink.click();
  });

  test('tests the navigation of the footer links', async ({ browserName }) => {
    await homePage.aboutUsLink.waitFor({ state: 'visible' });
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '08-homepage-footer-links', browserName),
      fullPage: true 
    });
    
    await homePage.clickAboutUsLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '09-about-us-page', browserName),
      fullPage: true 
    });
    await aboutUsPage.homePageLink.click();

    await homePage.clickDeliveryInformationLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '10-delivery-information-page', browserName),
      fullPage: true 
    });
    await deliveryInformationPage.homePageLink.click();

    await homePage.clickPrivacyPolicyLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '11-privacy-policy-page', browserName),
      fullPage: true 
    });
    await privacyPolicyPage.homePageLink.click();

    await homePage.clickTermsConditionsLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '12-terms-conditions-page', browserName),
      fullPage: true 
    });
    await termsConditionsPage.homePageLink.click();

    await homePage.clickContactUsLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=information/contact");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '13-contact-us-footer-page', browserName),
      fullPage: true 
    });
    await contactUsPage.homePageLink.click();

    await homePage.clickReturnsLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/return/add");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '14-returns-page', browserName),
      fullPage: true 
    });
    await returnsPage.homePageLink.click();

    await homePage.clickSiteMapLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=information/sitemap");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '15-sitemap-page', browserName),
      fullPage: true 
    });
    await siteMapPage.homePageLink.click();

    await homePage.clickBrandsLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/manufacturer");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '16-brands-page', browserName),
      fullPage: true 
    });
    await brandsPage.homePageLink.click();

    await homePage.clickGiftCertificatesLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/voucher");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '17-gift-certificates-page', browserName),
      fullPage: true 
    });
    await giftCertificatePage.homePageLink.click();

    await homePage.clickAffiliateLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=affiliate/login");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '18-affiliates-page', browserName),
      fullPage: true 
    });
    await affiliatesPage.homePageLink.click();

    await homePage.clickSpecialsLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/special");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '19-specials-page', browserName),
      fullPage: true 
    });
    await specialsPage.homePageLink.click();

    await homePage.clickMyAccountFooterLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '20-my-account-footer-login', browserName),
      fullPage: true 
    });
    await loginPage.homePageLink.click();

    await homePage.clickOrderHistoryFooterLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
    console.log("Order History page displays the Login page, and this is expected behavior because user is not logged in.");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '21-order-history-redirected-login', browserName),
      fullPage: true 
    });
    await loginPage.homePageLink.click();

    await homePage.clickWishListFooterLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
    console.log("Wish List page displays the Login page, and this is expected behavior because user is not logged in.");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '22-wishlist-footer-redirected-login', browserName),
      fullPage: true 
    });
    await loginPage.homePageLink.click();

    await homePage.clickNewsletterFooterLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
    console.log("Newsletter page displays the Login page, and this is expected behavior because user is not logged in.");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '23-newsletter-redirected-login', browserName),
      fullPage: true 
    });
    await loginPage.homePageLink.click();
  });

  test('tests the currency dropdown in the header', async ({ browserName }) => {
    await homePage.currencyDropdown.waitFor({ state: 'visible' });
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '24-initial-currency-state', browserName),
      fullPage: true 
    });
    
    await homePage.selectPoundSterlingCurrency();
    await expect(homePage.currencySymbol).toHaveText("£");
    await expect(homePage.cartButton).toContainText("£");
    console.log("Pound Sterling currency test passed - symbols match in dropdown and cart");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '25-pound-sterling-currency', browserName),
      fullPage: true 
    });

    await homePage.selectEuroCurrency();
    await expect(homePage.currencySymbol).toHaveText("€");
    await expect(homePage.cartButton).toContainText("€");
    console.log("Euro currency test passed - symbols match in dropdown and cart");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '26-euro-currency', browserName),
      fullPage: true 
    });

    await homePage.selectUsDollarCurrency();
    await expect(homePage.currencySymbol).toHaveText("$");
    await expect(homePage.cartButton).toContainText("$");
    console.log("US Dollar currency test passed - symbols match in dropdown and cart");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '27-us-dollar-currency', browserName),
      fullPage: true 
    });
  });

  test('tests the functionality of the Navigation menu links', async({ browserName }) => {
    await homePage.desktopsMenuItem.waitFor({ state: 'visible' });
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '28-navigation-menu-initial', browserName),
      fullPage: true 
    });
    
    await homePage.navigateToDesktopsPC();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=20_26");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '29-desktops-pc-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToDesktopsMac();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '30-desktops-mac-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToAllDesktops();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=20");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '31-all-desktops-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToLaptopsMacs();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=18_46");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '32-laptops-macs-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToLaptopsWindows();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=18_45");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '33-laptops-windows-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToAllLaptops();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=18");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '34-all-laptops-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToComponentsMiceAndTrackballs();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=25_29");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '35-components-mice-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToComponentsMonitors();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=25_28");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '36-components-monitors-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToComponentsPrinters();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=25_30");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '37-components-printers-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToComponentsScanners();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=25_31");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '38-components-scanners-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToComponentsWebCameras();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=25_32");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '39-components-webcameras-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToAllComponents();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=25");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '40-all-components-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToTablets();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=57");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '41-tablets-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToSoftware();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=17");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '42-software-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToPhones();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=24");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '43-phones-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToCameras();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=33");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '44-cameras-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToMP3PlayersOption11();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=34_43");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '45-mp3-players-option11-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

    await homePage.navigateToAllMP3Players();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=34");
    await page.screenshot({ 
      path: getScreenshotPath('navigation-tests', '46-all-mp3-players-page', browserName),
      fullPage: true 
    });
    await homePage.homePageLink.click();

  });


  test.afterEach(async () => {
    await page.evaluate(() => localStorage.clear());
  });

  test.afterAll(async () => {
    await page.close();
  });

});
