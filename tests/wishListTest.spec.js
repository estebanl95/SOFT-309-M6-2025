import { test, expect } from '@playwright/test';
import { HomePage } from './pages/Home.page';

let page;
let homePage;
let wishListPage;

test.describe('Wish List ', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://tutorialsninja.com/demo/');
        homePage = HomePage.getInstance(page);
    });

    test.beforeEach(async () => {
        await page.goto('https://tutorialsninja.com/demo/');
        HomePage.reset();
    });

    test('tests adding an item to the Wish List being logged out', async () => {
        await homePage.macBookWishListButton.waitFor({ state: 'visible' });
        await expect(homePage.wishListLink).toContainText('0');
        await homePage.addMacBookToWishList();
        await expect(homePage.wishListAlert).toBeVisible();
        await expect(homePage.wishListLink).toContainText('1');
    });

    test('tests adding items to the Wish List and visiting the Wish List page being logged out', async () => {
        await homePage.macBookWishListButton.waitFor({ state: 'visible' });
        await homePage.addMacBookToWishList();
        await expect(homePage.wishListAlert).toBeVisible();
        await expect(homePage.wishListLink).toContainText('1');
        await homePage.addIPhoneToWishList();
        await expect(homePage.wishListAlert).toBeVisible();
        await expect(homePage.wishListLink).toContainText('2');
        await homePage.addAppleCinemaToWishList();
        await expect(homePage.wishListAlert).toBeVisible();
        await expect(homePage.wishListLink).toContainText('3');
        await homePage.addCanonCameraToWishList();
        await expect(homePage.wishListAlert).toBeVisible();
        await expect(homePage.wishListLink).toContainText('4');
        await homePage.wishListLink.click();
        await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
        console.log("Wish List page displays the Login page, and this is expected behavior because user is not logged in.");
    });

    test.afterEach(async () => {
        await page.evaluate(() => localStorage.clear());
    });

    test.afterAll(async () => {
        await page.close();
    });
});