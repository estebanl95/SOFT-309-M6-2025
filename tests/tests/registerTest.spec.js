import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Home.page';
import { RegisterAccountPage } from '../pages/Register.page';
import { AccountCreatedPage } from '../pages/AccountCreated.page';
import { MyAccountPage } from '../pages/MyAccount.page';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.creds.env' });

let page;
let homePage;
let registerPage;
let accountCreatedPage;
let myAccountPage;

test.describe('Register ', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://tutorialsninja.com/demo/');
        homePage = HomePage.getInstance(page);
        registerPage = RegisterAccountPage.getInstance(page);
        accountCreatedPage = AccountCreatedPage.getInstance(page);
        myAccountPage = MyAccountPage.getInstance(page);
    });

    test.beforeEach(async () => {
        await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');
        HomePage.reset();
        RegisterAccountPage.reset();
        AccountCreatedPage.reset();
        MyAccountPage.reset();
    });

    test('tests the functionality of an invalid user registration', async () => {
        const firstName = process.env.INVALID_FIRST_NAME;
        const lastName = process.env.INVALID_LAST_NAME;
        const email = process.env.INVALID_EMAIL_REGISTER;
        const telephone = process.env.INVALID_TELEPHONE;
        const password = process.env.INVALID_PASSWORD;
        const confirmPassword = process.env.CONFIRM_INVALID_PASSWORD;

        await registerPage.continueButton.waitFor({ state: 'visible' });
        await registerPage.registerNewUser(firstName, lastName, email, telephone, password, confirmPassword);
        await registerPage.subscribeNo.click();
        await registerPage.continueButton.click();
        await expect(registerPage.privacyPolicyWarning).toHaveText('Warning: You must agree to the Privacy Policy!');
        await expect(registerPage.passwordMismatchWarning).toHaveText('Password confirmation does not match password!');
    });

    test('tests the functionality of a valid user registration without checking the Privacy Policy checkbox', async () => {
        const firstName = process.env.REGISTER_FIRST_NAME;
        const lastName = process.env.REGISTER_LAST_NAME;
        const email = process.env.REGISTER_EMAIL;
        const telephone = process.env.REGISTER_TELEPHONE;
        const password = process.env.REGISTER_PASSWORD;
        const confirmPassword = process.env.REGISTER_CONFIRM_PASSWORD;

        await registerPage.continueButton.waitFor({ state: 'visible' });
        await registerPage.registerNewUser(firstName, lastName, email, telephone, password, confirmPassword);
        await registerPage.subscribeNo.click();
        await registerPage.continueButton.click();
        await expect(registerPage.privacyPolicyWarning).toHaveText('Warning: You must agree to the Privacy Policy!');
    });

    test.describe.serial('User Registration Flow', () => {
        let registeredEmail;
        let browser;
        
        test.beforeAll(async ({ browser: testBrowser }) => {
            browser = testBrowser;
        });
        
        test('tests the functionality of a valid user registration', async () => {
            const timestamp = Date.now();
            registeredEmail = `testuser_${timestamp}@example.com`;
            
            const firstName = process.env.REGISTER_FIRST_NAME;
            const lastName = process.env.REGISTER_LAST_NAME;
            const telephone = process.env.REGISTER_TELEPHONE;
            const password = process.env.REGISTER_PASSWORD;
            const confirmPassword = process.env.REGISTER_CONFIRM_PASSWORD;

            console.log(`Registering with unique email: ${registeredEmail}`);

            await registerPage.continueButton.waitFor({ state: 'visible' });
            await registerPage.registerNewUser(firstName, lastName, registeredEmail, telephone, password, confirmPassword);
            await registerPage.subscribeNo.click();
            await registerPage.privacyPolicyCheckbox.check();
            await registerPage.continueButton.click();
            await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/success')
            await expect(accountCreatedPage.accountCreatedTitle).toHaveText('Your Account Has Been Created!');
            await accountCreatedPage.continueButton.click();
            await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/account');
            await expect(myAccountPage.myAccountTitle).toHaveText('My Account');
            await expect(myAccountPage.homePageLink).toBeVisible();
            await myAccountPage.homePageLink.click();
            await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
        });

        test('tests the functionality of registering an already registered email', async () => {
            if (!registeredEmail) {
                throw new Error('Previous test did not set the registered email');
            }
            
            const newContext = await browser.newContext();
            const newPage = await newContext.newPage();
            await newPage.goto('https://tutorialsninja.com/demo/index.php?route=account/register');

            const freshRegisterPage = RegisterAccountPage.getInstance(newPage);
            
            const firstName = process.env.REGISTER_FIRST_NAME;
            const lastName = process.env.REGISTER_LAST_NAME;
            const telephone = process.env.REGISTER_TELEPHONE;
            const password = process.env.REGISTER_PASSWORD;
            const confirmPassword = process.env.REGISTER_CONFIRM_PASSWORD;

            console.log(`Testing already registered email: ${registeredEmail}`);

            await freshRegisterPage.continueButton.waitFor({ state: 'visible' });
            await freshRegisterPage.registerNewUser(firstName, lastName, registeredEmail, telephone, password, confirmPassword);
            await freshRegisterPage.subscribeNo.click();
            await freshRegisterPage.privacyPolicyCheckbox.check();
            await freshRegisterPage.continueButton.click();
            
            await freshRegisterPage.emailAlreadyRegisteredWarning.waitFor({ state: 'visible' });
            await expect(freshRegisterPage.emailAlreadyRegisteredWarning).toHaveText('Warning: E-Mail Address is already registered!');
            
            await newContext.close();
        });
    });

    test.afterEach(async () => {
        await page.evaluate(() => localStorage.clear());
    });

    test.afterAll(async () => {
        await page.close();
    });
});