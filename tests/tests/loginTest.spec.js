import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Home.page';
import { LoginPage } from '../pages/Login.page';
import { MyAccountPage } from '../pages/MyAccount.page';
import { OrderHistoryPage } from '../pages/OrderHistory.page';
import { TransactionsPage } from '../pages/Transactions.page';
import { AccountDownloadsPage } from '../pages/AccountDownloads.page';
import { LogoutPage } from '../pages/Logout.page';

import * as dotenv from 'dotenv';

dotenv.config({ path: '.creds.env' });

let page;
let homePage;
let loginPage;
let myAccountPage;
let orderHistoryPage;
let transactionsPage;
let accountDownloadsPage;
let logoutPage;

test.describe('Login Page ', () => {
    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
        
        homePage = HomePage.getInstance(page);
        loginPage = LoginPage.getInstance(page);
        myAccountPage = MyAccountPage.getInstance(page);
        orderHistoryPage = OrderHistoryPage.getInstance(page);
        transactionsPage = TransactionsPage.getInstance(page);
        accountDownloadsPage = AccountDownloadsPage.getInstance(page);
        logoutPage = LogoutPage.getInstance(page);
        
        HomePage.reset();
        LoginPage.reset();
        MyAccountPage.reset();
        OrderHistoryPage.reset();
        TransactionsPage.reset();
        AccountDownloadsPage.reset();
        LogoutPage.reset();
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

    test('tests the functionality of submitting valid username and password', async () => {
        const email = process.env.LOGIN_EMAIL;
        const password = process.env.LOGIN_PASSWORD;
        await loginPage.loginButton.waitFor({ state: 'visible' });
        await loginPage.submitLogin(email, password);
        await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/account');
        await expect(myAccountPage.myAccountTitle).toHaveText('My Account');
    });

    test('tests the My Account dropdown menu options visibility', async () => {
        const email = process.env.LOGIN_EMAIL;
        const password = process.env.LOGIN_PASSWORD;
        await loginPage.loginButton.waitFor({ state: 'visible' });
        await loginPage.submitLogin(email, password);
        await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/account');
        await myAccountPage.homePageLink.click();
        await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
        await homePage.myAccountDropdown.waitFor({ state: 'visible' });
        await homePage.myAccountDropdown.click();
        await homePage.myAccountOption.waitFor({ state: 'visible' });
        await expect(homePage.myAccountOption).toHaveText('My Account');
        await expect(homePage.orderHistoryOption).toHaveText('Order History');
        await expect(homePage.transactionsOption).toHaveText('Transactions');
        await expect(homePage.downloadsOption).toHaveText('Downloads');
        await expect(homePage.logoutOption).toHaveText('Logout');
    });
    
    test('tests the My Account dropdown - My Account navigation', async () => {
        const email = process.env.LOGIN_EMAIL;
        const password = process.env.LOGIN_PASSWORD;
        
        await loginPage.loginButton.waitFor({ state: 'visible' });
        await loginPage.submitLogin(email, password);
        await myAccountPage.homePageLink.click();
        await homePage.myAccountDropdown.click();
        await homePage.myAccountOption.click();
        await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/account');
        await myAccountPage.myAccountTitle.waitFor({ state: 'visible' });
    });
    
    test('tests the My Account dropdown - Order History navigation', async () => {
        const email = process.env.LOGIN_EMAIL;
        const password = process.env.LOGIN_PASSWORD;
        await loginPage.loginButton.waitFor({ state: 'visible' });
        await loginPage.submitLogin(email, password);
        await myAccountPage.homePageLink.click();
        await homePage.myAccountDropdown.click();
        await homePage.orderHistoryOption.click();
        await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/order');
        await orderHistoryPage.orderHistoryTitle.waitFor({ state: 'visible' });
        await expect(orderHistoryPage.orderHistoryTitle).toHaveText('Order History');
    });
    
    test('tests the My Account dropdown - Transactions navigation', async () => {
        const email = process.env.LOGIN_EMAIL;
        const password = process.env.LOGIN_PASSWORD;
        await loginPage.loginButton.waitFor({ state: 'visible' });
        await loginPage.submitLogin(email, password);
        await myAccountPage.homePageLink.click();
        await homePage.myAccountDropdown.click();
        await homePage.transactionsOption.click();
        await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/transaction');
        await transactionsPage.transactionsTitle.waitFor({ state: 'visible' });
        await expect(transactionsPage.transactionsTitle).toHaveText('Your Transactions');
    });
    
    test('tests the My Account dropdown - Logout navigation', async () => {
        const email = process.env.LOGIN_EMAIL;
        const password = process.env.LOGIN_PASSWORD;
        await loginPage.loginButton.waitFor({ state: 'visible' });
        await loginPage.submitLogin(email, password);
        await myAccountPage.homePageLink.click();
        await homePage.myAccountDropdown.click();
        await homePage.logoutOption.click();
        await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/logout');
        await logoutPage.logoutTitle.waitFor({ state: 'visible' });
        await expect(logoutPage.logoutTitle).toHaveText('Account Logout');
        await logoutPage.continueButton.click();
        await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
    });

    test.afterEach(async () => {
        if (page) {
            await page.close();
        }
    });
});