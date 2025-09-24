export class ProductPage {
    constructor(page) {
        this.page = page;
        this.homePageLink = page.locator('div[id="logo"] h1 a');
        this.productNameTitle = page.locator('div[id="content"] h1');
        this.descriptionTab = page.locator('a[href="#tab-description"]');
        this.reviewsTab = page.locator('a[href="#tab-review"]');
        this.specificationTab = page.locator('a[href="#tab-specification"]');
        this.quantityInput = page.locator('#input-quantity');
        this.addToCartButtonProduct = page.locator('#button-cart');
        this.reviewsLink = page.locator('body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > p:nth-child(1) > a:nth-child(6)');
        this.writeAReviewLink = page.locator('body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > p:nth-child(1) > a:nth-child(7)');
        this.yourNameInput = page.locator('#input-name');
        this.yourReviewInput = page.locator('#input-review');
        this.ratingRadiobutton1 = page.locator('input[value="1"][name="rating"]');
        this.ratingRadiobutton2 = page.locator('input[value="2"][name="rating"]');
        this.ratingRadiobutton3 = page.locator('input[value="3"][name="rating"]');
        this.ratingRadiobutton4 = page.locator('input[value="4"][name="rating"]');
        this.ratingRadiobutton5 = page.locator('input[value="5"][name="rating"]');
        this.continueButtonReview = page.locator('#button-review');
        this.successAlert = page.locator('.alert.alert-success.alert-dismissible');
        this.errorAlert = page.locator('.alert.alert-danger.alert-dismissible');
        this.cartButton = page.locator('.btn.btn-inverse.btn-block.btn-lg.dropdown-toggle');
        this.shoppingCartEmptyMessage = page.locator('.text-center');
        this.productNameLinkCart = page.locator('td[class="text-left"] a');
        this.removeButtonCart = page.locator('button[title="Remove"]');
        this.viewCartLink = page.locator('body > header:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > div:nth-child(1) > p:nth-child(2) > a:nth-child(1) > strong:nth-child(1)');
        this.checkoutlink = page.locator('body > header:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > div:nth-child(1) > p:nth-child(2) > a:nth-child(2) > strong:nth-child(1)');
        this.productPrice = page.locator('ul[class="list-unstyled"] li h2');
        this.totalProductPrice = page.locator('tbody tr:nth-child(4) td:nth-child(2)');
    }

    static #instance;

    static getInstance(page) {
        if (!ProductPage.#instance || ProductPage.#instance.page !== page) {
            // Creates a new instance if it doesn't exist or if it's a different page
            ProductPage.#instance = new ProductPage(page);
        }
        return ProductPage.#instance;
    }

    

    static reset() {
        ProductPage.#instance = null;
    }

}