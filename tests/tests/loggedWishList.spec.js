import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Home.page';
import { LoginPage } from '../pages/Login.page';
import { MyAccountPage } from '../pages/MyAccount.page';
import { WishListPage } from '../pages/WishList.page';

import * as dotenv from 'dotenv';

dotenv.config({ path: '.creds.env' });

// Helper function to create organized screenshot paths
function getScreenshotPath(testName, stepName, browserName = 'chromium') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return `screenshots/${testName}/${browserName}/${timestamp}-${stepName}.png`;
}

let page;
let homePage;
let loginPage;
let myAccountPage;
let wishListPage;

test.describe('Logged Wish List ', () => {
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
        
        // Screenshot after successful login
        await page.screenshot({ 
            path: getScreenshotPath('wishlist-add-test', '01-after-login'),
            fullPage: true 
        });
        
        await myAccountPage.homePageLink.click();
        await homePage.addMacBookToWishList();
        await expect(homePage.wishListAlert).toBeVisible();
        
        // Screenshot after adding item to wishlist
        await page.screenshot({ 
            path: getScreenshotPath('wishlist-add-test', '02-item-added-to-wishlist'),
            fullPage: true 
        });
        
        await expect(homePage.wishListLink).toContainText(/\d+/);
        
        // Wait a bit for the item to be properly added to the wishlist
        await page.waitForTimeout(1000);
        
        await homePage.wishListLink.click();
        await wishListPage.wishListTitle.waitFor({ state: 'visible' });
        await expect(wishListPage.wishListTitle).toHaveText('My Wish List');
        
        // Screenshot of the wishlist page
        await page.screenshot({ 
            path: getScreenshotPath('wishlist-add-test', '03-wishlist-page-view'),
            fullPage: true 
        });
        
        // Check that MacBook is in the wishlist with retry logic
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
        
        // Wait a bit for the item to be properly added to the wishlist
        await page.waitForTimeout(1000);
        
        await homePage.wishListLink.click();
        await wishListPage.wishListTitle.waitFor({ state: 'visible' });
        await expect(wishListPage.wishListTitle).toHaveText('My Wish List');
        
        // Wait for the MacBook to appear in the wishlist with retry logic
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
        
        // Screenshot before removing item
        await page.screenshot({ 
            path: getScreenshotPath('wishlist-remove-test', '04-before-removing-item'),
            fullPage: true 
        });
        
        // Remove the item
        await wishListPage.removeItemfromWishList('MacBook');
        
        // Wait for removal to complete
        await page.waitForTimeout(1000);
        
        // Screenshot after removing item
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