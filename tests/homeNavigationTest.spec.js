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
import { GiftCertificatePage } from './pages/GiftCertificate.page';
import { AffiliatesPage } from './pages/Affiliates.page';
import { SpecialsPage } from './pages/Specials.page';
import { DesktopPage } from './pages/devicePages/Desktop.page'; 
import { DesktopMacPage } from './pages/devicePages/DesktopMac.page';
import { DesktopPCPage } from './pages/devicePages/DesktopPC.page';
import { LaptopPage } from './pages/devicePages/Laptop.page';
import { LaptopWindowsPage } from './pages/devicePages/LaptopWindows.page';
import { LaptopMacPage } from './pages/devicePages/LaptopMac.page';
import { ComponentsPage } from './pages/devicePages/Components.page';
import { ComponentsMicePage } from './pages/devicePages/ComponentsMice.page';
import { ComponentsMonitorPage } from './pages/devicePages/ComponentsMonitor.page';
import { ComponentsPrinterPage } from './pages/devicePages/ComponentsPrinter.page';
import { ComponentsScannerPage } from './pages/devicePages/ComponentsScanner.page';
import { ComponentsWebCameraPage } from './pages/devicePages/ComponentsWebCamera.page';
import { TabletsPage } from './pages/devicePages/Tablets.page';
import { SoftwarePage } from './pages/devicePages/Software.page';
import { PhonesPage } from './pages/devicePages/Phones.page';
import { CamerasPage } from './pages/devicePages/Cameras.page';
import { MP3PlayerPage } from './pages/devicePages/MP3Player.page';
import { MP3PlayerItemPage } from './pages/devicePages/MP3PlayerItem.page';

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
let mp3PlayerItemPage;
let mp3PlayerPage;
let desktops;
let desktopMac;
let desktopPC;
let laptops;
let laptopMac;
let laptopWindows;
let components;
let componentsMice;
let componentsMonitor;
let componentsPrinter;
let componentsScanner;
let componentsWebCamera;
let tablets;
let software;
let phonePDA;
let cameras;

test.describe('Home Page ', () => {
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
    desktopMac = DesktopMacPage.getInstance(page);
    desktopPC = DesktopPCPage.getInstance(page);
    laptops = LaptopPage.getInstance(page);
    laptopMac = LaptopMacPage.getInstance(page);
    laptopWindows = LaptopWindowsPage.getInstance(page);
    components = ComponentsPage.getInstance(page);
    componentsMice = ComponentsMicePage.getInstance(page);
    componentsMonitor = ComponentsMonitorPage.getInstance(page);
    componentsPrinter = ComponentsPrinterPage.getInstance(page);
    componentsScanner = ComponentsScannerPage.getInstance(page);
    componentsWebCamera = ComponentsWebCameraPage.getInstance(page);
    tablets = TabletsPage.getInstance(page);
    software = SoftwarePage.getInstance(page);
    phonePDA = PhonesPage.getInstance(page);
    cameras = CamerasPage.getInstance(page);
    mp3PlayerPage = MP3PlayerPage.getInstance(page);
    mp3PlayerItemPage = MP3PlayerItemPage.getInstance(page);
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
    DesktopMacPage.reset();
    DesktopPCPage.reset();
    LaptopPage.reset();
    LaptopMacPage.reset();
    LaptopWindowsPage.reset();
    ComponentsPage.reset();
    ComponentsMicePage.reset();
    ComponentsMonitorPage.reset();
    ComponentsPrinterPage.reset();
    ComponentsScannerPage.reset();
    ComponentsWebCameraPage.reset();
    TabletsPage.reset();
    SoftwarePage.reset();
    PhonesPage.reset();
    CamerasPage.reset();
    MP3PlayerPage.reset();
    MP3PlayerItemPage.reset();
  });

  test('tests the navigation of the header links', async () => {
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

  test('tests the navigation of the footer links', async () => {
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

  test('tests the currency dropdown in the header', async () => {
    await homePage.selectPoundSterlingCurrency();
    await expect(homePage.currencySymbol).toHaveText("£");
    await expect(homePage.cartButton).toContainText("£");
    console.log("Pound Sterling currency test passed - symbols match in dropdown and cart");

    await homePage.selectEuroCurrency();
    await expect(homePage.currencySymbol).toHaveText("€");
    await expect(homePage.cartButton).toContainText("€");
    console.log("Euro currency test passed - symbols match in dropdown and cart");

    await homePage.selectUsDollarCurrency();
    await expect(homePage.currencySymbol).toHaveText("$");
    await expect(homePage.cartButton).toContainText("$");
    console.log("US Dollar currency test passed - symbols match in dropdown and cart");
  });

  test('tests the functionality of the Navigation menu links', async() => {
    await homePage.navigateToDesktopsPC();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=20_26");
    await homePage.homePageLink.click();

    await homePage.navigateToDesktopsMac();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27");
    await homePage.homePageLink.click();

    await homePage.navigateToAllDesktops();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=20");
    await homePage.homePageLink.click();

    await homePage.navigateToLaptopsMacs();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=18_46");
    await homePage.homePageLink.click();

    await homePage.navigateToLaptopsWindows();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=18_45");
    await homePage.homePageLink.click();

    await homePage.navigateToAllLaptops();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=18");
    await homePage.homePageLink.click();

    await homePage.navigateToComponentsMiceAndTrackballs();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=25_29");
    await homePage.homePageLink.click();

    await homePage.navigateToComponentsMonitors();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=25_28");
    await homePage.homePageLink.click();

    await homePage.navigateToComponentsPrinters();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=25_30");
    await homePage.homePageLink.click();

    await homePage.navigateToComponentsScanners();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=25_31");
    await homePage.homePageLink.click();

    await homePage.navigateToComponentsWebCameras();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=25_32");
    await homePage.homePageLink.click();

    await homePage.navigateToAllComponents();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=25");
    await homePage.homePageLink.click();

    await homePage.navigateToTablets();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=57");
    await homePage.homePageLink.click();

    await homePage.navigateToSoftware();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=17");
    await homePage.homePageLink.click();

    await homePage.navigateToPhones();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=24");
    await homePage.homePageLink.click();

    await homePage.navigateToCameras();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=33");
    await homePage.homePageLink.click();

    await homePage.navigateToMP3PlayersOption11();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=34_43");
    await homePage.homePageLink.click();

    await homePage.navigateToAllMP3Players();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=product/category&path=34");
    await homePage.homePageLink.click();

  });


  test.afterEach(async () => {
    await page.evaluate(() => localStorage.clear());
  });

  test.afterAll(async () => {
    await page.close();
  });

});
