import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Home.page';
import { ShoppingCartPage } from '../pages/ShoppingCart.page';

function getScreenshotPath(testName, stepName, browserName = 'chromium') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return `screenshots/${testName}/${browserName}/${timestamp}-${stepName}.png`;
}

let page;
let homePage;
let shoppingCartPage;

test.describe('Add to Cart Tests', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://tutorialsninja.com/demo/');
        homePage = HomePage.getInstance(page);
        shoppingCartPage = ShoppingCartPage.getInstance(page);
    });

    test.beforeEach(async () => {
        await page.goto('https://tutorialsninja.com/demo/');
        HomePage.reset();
        ShoppingCartPage.reset();
    });

    test('should add MacBook to cart from homepage', async ({ browserName }) => {
        await page.screenshot({ 
            path: getScreenshotPath('add-to-cart-tests', '01-homepage-initial-state', browserName),
            fullPage: true 
        });
        const macBookAddToCartButton = page.locator('div.product-layout:has-text("MacBook") button[onclick*="cart.add"]');
        await macBookAddToCartButton.waitFor({ state: 'visible' });
        await page.screenshot({ 
            path: getScreenshotPath('add-to-cart-tests', '02-before-adding-macbook', browserName),
            fullPage: true 
        });
        await macBookAddToCartButton.click();
        const successAlert = page.locator('.alert.alert-success.alert-dismissible');
        await successAlert.waitFor({ state: 'visible' });
        await expect(successAlert).toContainText('MacBook');
        await expect(successAlert).toContainText('You have added MacBook to your shopping cart!');
        await page.screenshot({ 
            path: getScreenshotPath('add-to-cart-tests', '03-success-message-displayed', browserName),
            fullPage: true 
        });
        const cartButton = homePage.cartButton;
        await expect(cartButton).toContainText('1 item(s)');
        
        console.log('MacBook successfully added to cart!');
    });

    test('should add iPhone to cart and verify cart contents', async ({ browserName }) => {
        await page.screenshot({ 
            path: getScreenshotPath('add-to-cart-tests', '04-homepage-before-iphone', browserName),
            fullPage: true 
        });
        const iPhoneAddToCartButton = page.locator('div.product-layout:has-text("iPhone") button[onclick*="cart.add"]');
        await iPhoneAddToCartButton.waitFor({ state: 'visible' });
        
        await page.screenshot({ 
            path: getScreenshotPath('add-to-cart-tests', '05-before-adding-iphone', browserName),
            fullPage: true 
        });
        await iPhoneAddToCartButton.click();
        const successAlert = page.locator('.alert.alert-success.alert-dismissible');
        await successAlert.waitFor({ state: 'visible' });
        await expect(successAlert).toContainText('iPhone');
        
        await page.screenshot({ 
            path: getScreenshotPath('add-to-cart-tests', '06-iphone-success-message', browserName),
            fullPage: true 
        });
        await homePage.clickShoppingCartLink();
        await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=checkout/cart');
        await page.screenshot({ 
            path: getScreenshotPath('add-to-cart-tests', '07-shopping-cart-with-iphone', browserName),
            fullPage: true 
        });
        const cartContent = page.locator('#content');
        await expect(cartContent).toContainText('iPhone');
        
        console.log('iPhone successfully added to cart and verified in cart page!');
    });

    test('should add multiple items to cart', async ({ browserName }) => {
        await page.screenshot({ 
            path: getScreenshotPath('add-to-cart-tests', '08-homepage-multiple-items-test', browserName),
            fullPage: true 
        });
        const macBookButton = page.locator('div.product-layout:has-text("MacBook") button[onclick*="cart.add"]');
        await macBookButton.waitFor({ state: 'visible' });
        await macBookButton.click();

        let successAlert = page.locator('.alert.alert-success.alert-dismissible');
        await successAlert.waitFor({ state: 'visible' });
        await expect(successAlert).toContainText('MacBook');
        await page.waitForTimeout(2000);

        await page.screenshot({ 
            path: getScreenshotPath('add-to-cart-tests', '09-after-adding-macbook', browserName),
            fullPage: true 
        });

        const iPhoneButton = page.locator('div.product-layout:has-text("iPhone") button[onclick*="cart.add"]');
        await iPhoneButton.waitFor({ state: 'visible' });
        await iPhoneButton.click();
        successAlert = page.locator('.alert.alert-success.alert-dismissible');
        await successAlert.waitFor({ state: 'visible' });
        await expect(successAlert).toContainText('iPhone');
        await page.screenshot({ 
            path: getScreenshotPath('add-to-cart-tests', '10-after-adding-iphone', browserName),
            fullPage: true 
        });

        const cartButton = homePage.cartButton;
        await expect(cartButton).toContainText('2 item(s)');
        await homePage.clickShoppingCartLink();
        await page.screenshot({ 
            path: getScreenshotPath('add-to-cart-tests', '11-cart-with-multiple-items', browserName),
            fullPage: true 
        });
        const cartContent = page.locator('#content');
        await expect(cartContent).toContainText('MacBook');
        await expect(cartContent).toContainText('iPhone');
        
        console.log('Multiple items successfully added to cart!');
    });

    test.afterEach(async () => {
        await page.evaluate(() => localStorage.clear());
    });

    test.afterAll(async () => {
        await page.close();
    });
});
