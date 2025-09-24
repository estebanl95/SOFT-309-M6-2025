export class WishListPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.locator('div[id="logo"] h1 a');
        this.wishListTitle = page.locator('div[id="content"] h2');
        this.continueButton = page.locator('.btn.btn-primary');
        this.addToCartButton = page.locator('button[class="btn btn-primary"] i[class="fa fa-shopping-cart"]');
        this.removeButton = page.locator('.fa.fa-times');
        this.productNameLink = page.locator('td[class="text-left"] a');
        this.successAlert = page.locator('.alert.alert-success.alert-dismissible');
    }

    static #instance;

    static getInstance(page) {
        if (!WishListPage.#instance || WishListPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            WishListPage.#instance = new WishListPage(page);
        }
        return WishListPage.#instance;
    }

    async isItemInWishList(productName) {
        try {
            const productLink = this.page.locator(`td.text-left a:has-text("${productName}")`);
            await productLink.waitFor({ state: 'visible', timeout: 5000 });
            return true;
        } catch (error) {
            return false;
        }
    }

    async removeItemfromWishList(productName) {
        const productRow = this.page.locator(`tr:has(td.text-left a:has-text("${productName}"))`);
        await productRow.waitFor({ state: 'visible', timeout: 5000 });
        const removeButton = productRow.locator('.fa.fa-times');
        await removeButton.click();
        await this.successAlert.waitFor({ state: 'visible', timeout: 5000 });
    }

    static reset() {
        WishListPage.#instance = null;
    }

    
}