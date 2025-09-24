import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Home.page';
import { ContactUsPage } from '../pages/ContactUs.page';
import { captureTestMoment } from '../utils/screenshotUtils.js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.creds.env' });

let page;
let homePage;
let contactUsPage;

test.describe('Contact Us ', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://tutorialsninja.com/demo/');
        homePage = HomePage.getInstance(page);
        contactUsPage = ContactUsPage.getInstance(page);
    });

    test.beforeEach(async () => {
        await page.goto('https://tutorialsninja.com/demo/index.php?route=information/contact');
        HomePage.reset();
        ContactUsPage.reset();
    });

    test('tests the functionality of submitting a blank form', async () => {
        await contactUsPage.submitButton.waitFor({ state: 'visible' });
        await captureTestMoment(page, 'contact-tests', '01-blank-form');
        await contactUsPage.submitForm();
        await expect(contactUsPage.nameErrorMessage).toBeVisible();
        await captureTestMoment(page, 'contact-tests', '02-blank-form-errors');
        await expect(contactUsPage.emailErrorMessage).toBeVisible();
        await expect(contactUsPage.enquiryErrorMessage).toBeVisible();
    });

    test('tests successful form submission with valid data', async () => {
        const name = process.env.CONTACT_NAME;
        const email = process.env.CONTACT_EMAIL;
        const message = process.env.CONTACT_MESSAGE;
        await contactUsPage.fillContactForm(name, email, message);
        await contactUsPage.submitForm();
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveURL(/.*route=information\/contact\/success/);
        console.log(`Form submitted successfully with name: ${name}, email: ${email}`);
    });

    test('tests form submission with invalid data', async () => {
        const name = process.env.INCOMPLETE_NAME;
        const email = process.env.INCORRECT_EMAIL;
        const message = process.env.SHORT_ENQUIRY;
        await contactUsPage.fillContactForm(name, email, message);
        await contactUsPage.submitForm();
        await expect(contactUsPage.nameErrorMessage).toBeVisible();
        await expect(contactUsPage.emailErrorMessage).toBeVisible();
        await expect(contactUsPage.enquiryErrorMessage).toBeVisible();
    });

    test.afterEach(async () => {
        await page.evaluate(() => localStorage.clear());
    });

    test.afterAll(async () => {
        await page.close();
    });

});