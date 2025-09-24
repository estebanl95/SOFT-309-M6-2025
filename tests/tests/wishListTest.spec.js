import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Home.page';
import { LoginPage } from '../pages/Login.page';
import { MyAccountPage } from '../pages/MyAccount.page';
import { WishListPage } from '../pages/WishList.page';
import { captureTestMoment } from '../utils/screenshotUtils.js';

import * as dotenv from 'dotenv';

dotenv.config({ path: '.creds.env' });
function getScreenshotPath(testName, stepName, browserName = 'chromium') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return `screenshots/${testName}/${browserName}/${timestamp}-${stepName}.png`;
}

let page;
let homePage;
let loginPage;
let myAccountPage;
let wishListPage;

test.describe('Wish List - Logged Out Tests', () => {
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
        await captureTestMoment(page, 'wishlist-loggedout-tests', '01-before-adding-item');
        await expect(homePage.wishListLink).toContainText('0');
        await homePage.addMacBookToWishList();
        await expect(homePage.wishListAlert).toBeVisible();
        await expect(homePage.wishListLink).toContainText('1');
        await captureTestMoment(page, 'wishlist-loggedout-tests', '02-after-adding-item');
    });

    test('tests adding items to the Wish List and visiting the Wish List page being logged out', async () => {
        await homePage.macBookWishListButton.waitFor({ state: 'visible' });
        await homePage.addMacBookToWishList();
        await expect(homePage.wishListAlert).toBeVisible();
        await expect(homePage.wishListLink).toContainText('1');
        await page.waitForTimeout(500); 
        await homePage.addIPhoneToWishList();
        await expect(homePage.wishListAlert).toBeVisible();
        await expect(homePage.wishListLink).toContainText('2');
        await page.waitForTimeout(500); 
        await homePage.addAppleCinemaToWishList();
        await expect(homePage.wishListAlert).toBeVisible();
        await expect(homePage.wishListLink).toContainText('3');
        await page.waitForTimeout(500); 
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

test.describe('Wish List - Logged In Tests', () => {
    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
        
        homePage = HomePage.getInstance(page);
        loginPage = LoginPage.getInstance(page);
        wishListPage = WishListPage.getInstance(page);
        myAccountPage = MyAccountPage.getInstance(page);
        
        HomePage.reset();
        LoginPage.reset();
        WishListPage.reset();
        MyAccountPage.reset();
    });

    test('tests the functionality of visualizing the Wish List page with an item added', async () => {
        const email = process.env.LOGIN_EMAIL;
        const password = process.env.LOGIN_PASSWORD;

        await loginPage.loginButton.waitFor({ state: 'visible' });
        await loginPage.submitLogin(email, password);
        await page.screenshot({ 
            path: getScreenshotPath('wishlist-add-test', '01-after-login'),
            fullPage: true 
        });
        
        await myAccountPage.homePageLink.click();
        await homePage.addMacBookToWishList();
        await expect(homePage.wishListAlert).toBeVisible();
        await page.screenshot({ 
            path: getScreenshotPath('wishlist-add-test', '02-item-added-to-wishlist'),
            fullPage: true 
        });
        
        await expect(homePage.wishListLink).toContainText(/\d+/);
        await page.waitForTimeout(1000);
        
        await homePage.wishListLink.click();
        await wishListPage.wishListTitle.waitFor({ state: 'visible' });
        await expect(wishListPage.wishListTitle).toHaveText('My Wish List');
        await page.screenshot({ 
            path: getScreenshotPath('wishlist-add-test', '03-wishlist-page-view'),
            fullPage: true 
        });
        let isItemVisible = false;
        let retryCount = 0;
        while (!isItemVisible && retryCount < 3) {
            isItemVisible = await wishListPage.isItemInWishList('MacBook');
            if (!isItemVisible) {
                await page.waitForTimeout(1000);
                await page.reload();
                await wishListPage.wishListTitle.waitFor({ state: 'visible' });
                retryCount++;
            }
        }
        expect(isItemVisible).toBe(true);
    });

    test('tests the functionality of removing an item from the Wish List', async () => {
        const email = process.env.LOGIN_EMAIL;
        const password = process.env.LOGIN_PASSWORD;
        
        await loginPage.loginButton.waitFor({ state: 'visible' });
        await loginPage.submitLogin(email, password);
        await myAccountPage.homePageLink.click();
        await homePage.addMacBookToWishList();
        await expect(homePage.wishListAlert).toBeVisible();
        await expect(homePage.wishListLink).toContainText(/\d+/);
        await page.waitForTimeout(1000);
        
        await homePage.wishListLink.click();
        await wishListPage.wishListTitle.waitFor({ state: 'visible' });
        await expect(wishListPage.wishListTitle).toHaveText('My Wish List');
        let isItemVisible = false;
        let retryCount = 0;
        while (!isItemVisible && retryCount < 3) {
            isItemVisible = await wishListPage.isItemInWishList('MacBook');
            if (!isItemVisible) {
                await page.waitForTimeout(1000);
                await page.reload();
                await wishListPage.wishListTitle.waitFor({ state: 'visible' });
                retryCount++;
            }
        }
        expect(isItemVisible).toBe(true);
        
        await page.screenshot({ 
            path: getScreenshotPath('wishlist-remove-test', '04-before-removing-item'),
            fullPage: true 
        });
        await wishListPage.removeItemfromWishList('MacBook');
        await page.waitForTimeout(1000);
        await page.screenshot({ 
            path: getScreenshotPath('wishlist-remove-test', '05-after-removing-item'),
            fullPage: true 
        });
        
        isItemVisible = await wishListPage.isItemInWishList('MacBook');
        expect(isItemVisible).toBe(false);
    });

    test.afterEach(async () => {
        if (page) {
            await page.close();
        }
    });
});