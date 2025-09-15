
import { test, expect } from '@playwright/test';
import { HomePage } from './pages/Home.page';
import { ContactUsPage } from './pages/ContactUs.page';
import { RegisterAccountPage } from './pages/Register.page';
import { LoginPage } from './pages/Login.page';
import { ShoppingCartPage } from './pages/ShoppingCart.page';
import { AboutUsPage } from './pages/AboutUs.page';
import { DeliveryInformationPage } from './pages/DeliveryInformation.page';
import { PrivacyPolicyPage } from './pages/PrivacyPolicy.page';
import { TermsConditionsPage } from './pages/TermsConditions.page';
import { ReturnsPage } from './pages/Returns.page';
import { SiteMapPage } from './pages/SiteMap.page';
import { BrandsPage } from './pages/Brands.page';
import { GiftCertificatePage } from './pages/GiftCertificate';
import { AffiliatesPage } from './pages/Affiliates.page';
import { SpecialsPage } from './pages/Specials.page';

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

test.describe('Home Navigation', () => {
  test.beforeAll(async ({ browser }) => {
    // Open a new browser context and page
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
  });

  test('test the navigation of the header links', async () => {
    await homePage.clickPhoneLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=information/contact");
    await contactUsPage.homePageLink.click();

    await homePage.clickRegisterLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/register");
    await registerPage.homePageLink.click();

    await homePage.clickLoginLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
    await loginPage.homePageLink.click();

    await homePage.clickWishListLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
    console.log("Wish List page displays the Login page, and this is expected behavior becaseuse user is not logged in.");
    await loginPage.homePageLink.click();

    await homePage.clickShoppingCartLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=checkout/cart");
    await shoppingCartPage.homePageLink.click();

    await homePage.clickCheckoutLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=checkout/cart");
    console.log("Checkout page displays the Shopping Cart page, and this is expected behavior because user is not logged in.");
    await shoppingCartPage.homePageLink.click();
  });

  test('the navigation of the footer links', async () => {
    await homePage.clickAboutUsLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4");
    await aboutUsPage.homePageLink.click();

    await homePage.clickDeliveryInformationLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6");
    await deliveryInformationPage.homePageLink.click();

    await homePage.clickPrivacyPolicyLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3");
    await privacyPolicyPage.homePageLink.click();

    await homePage.clickTermsConditionsLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5");
    await termsConditionsPage.homePageLink.click();

    await homePage.clickContactUsLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=information/contact");
    await contactUsPage.homePageLink.click();

    await homePage.clickReturnsLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/return/add");
    await returnsPage.homePageLink.click();

    await homePage.clickSiteMapLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=information/sitemap");
    await siteMapPage.homePageLink.click();

    await homePage.clickBrandsLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/manufacturer");
    await brandsPage.homePageLink.click();

    await homePage.clickGiftCertificatesLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/voucher");
    await giftCertificatePage.homePageLink.click();

    await homePage.clickAffiliateLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=affiliate/login");
    await affiliatesPage.homePageLink.click();

    await homePage.clickSpecialsLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/special");
    await specialsPage.homePageLink.click();

    await homePage.clickMyAccountFooterLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
    await loginPage.homePageLink.click();

    await homePage.clickOrderHistoryFooterLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
    console.log("Order History page displays the Login page, and this is expected behavior because user is not logged in.");
    await loginPage.homePageLink.click();

    await homePage.clickWishListFooterLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
    console.log("Wish List page displays the Login page, and this is expected behavior because user is not logged in.");
    await loginPage.homePageLink.click();

    await homePage.clickNewsletterFooterLink();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
    console.log("Newsletter page displays the Login page, and this is expected behavior because user is not logged in.");
    await loginPage.homePageLink.click();

  });

  test.afterEach(async () => {
    await page.evaluate(() => localStorage.clear());
  });

  test.afterAll(async () => {
    await page.close();
  });
});