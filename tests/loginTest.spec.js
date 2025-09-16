import { test, expect } from '@playwright/test';
import { HomePage } from './pages/Home.page';
import { LoginPage } from './pages/Login.page';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.creds.env' });

let page;
let homePage;
let loginPage;

test.describe('Login Page ', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://tutorialsninja.com/demo/');
        homePage = HomePage.getInstance(page);
        loginPage = LoginPage.getInstance(page);
    });

    test.beforeEach(async () => {
        await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
        HomePage.reset();
        LoginPage.reset();
        
    });

    test('tests the functionality of submitting blank credentials', async () => {
        await loginPage.loginButton.waitFor({ state: 'visible' });
        await loginPage.submitLoginwithBlankCredentials();
        await expect(loginPage.warningMessage).toBeVisible();
    });

    test('tests the functionality of submitting incorrect credentials', async () => {
        const email = process.env.INVALID_EMAIL_LOGIN;
        const password = process.env.INVALID_PASSWORD_LOGIN;
        await loginPage.loginButton.waitFor({ state: 'visible' });
        await loginPage.submitIncorrectLogin(email, password);
        await expect(loginPage.warningMessage).toBeVisible();
    });




    test.afterEach(async () => {
        await page.evaluate(() => localStorage.clear());
    });

    test.afterAll(async () => {
        await page.close();
    });
});