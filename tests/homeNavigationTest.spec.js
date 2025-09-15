
import { test, expect } from '@playwright/test';
import { HomePage } from './pages/Home.page';
import { ContactUsPage } from './pages/ContactUs.page';
import { RegisterAccountPage } from './pages/Register.page';
import { LoginPage } from './pages/Login.page';
import { ShoppingCartPage } from './pages/ShoppingCart.page';

let page;
let homePage;
let contactUsPage;
let registerPage;
let loginPage;
let shoppingCartPage;

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
  });

  test.beforeEach(async () => {
    await page.goto('https://tutorialsninja.com/demo/');
    HomePage.reset();
    ContactUsPage.reset();
    RegisterAccountPage.reset();
    LoginPage.reset();
    ShoppingCartPage.reset();
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

  test.afterEach(async () => {
    await page.evaluate(() => localStorage.clear());
  });

  test.afterAll(async () => {
    await page.close();
  });
});