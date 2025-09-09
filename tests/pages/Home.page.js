export class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.phoneLink = page.locator('.fa.fa-phone');
    // this.header = page.locator('header');
    // this.footer = page.locator('footer');
    // this.main = page.locator('main');
    // this.title = page.locator('h1');
    // this.description = page.locator('p');
    // this.getStartedLink = page.locator('text=Get Started');
  }

//   async goto() {
//     await this.page.goto('/');
//   }

  async clickPhoneLink() {
    await this.phoneLink.waitFor({ state: 'visible' });
    await this.phoneLink.click();
  }
}
