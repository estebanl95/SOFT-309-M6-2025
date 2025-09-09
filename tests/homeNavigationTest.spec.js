import {test} from '@playwright/test';
import {HomePage} from './pages/Home.page';

test.describe('Home Navigation', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://tutorialsninja.com/demo/');
  });


  test('should navigate to home page', async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.clickPhoneLink();
  });
}); 