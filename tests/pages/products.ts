import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper";

export default class productPage {
  private base: PlaywrightWrapper;
  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }
  private Elements = {
    tablets: "//span[@id='tabletsTxt']",
    productName: "//a[text()='HP ElitePad 1000 G2 Tablet']",
    quantityIncrease: "//div[@class='plus']",
    quantityDecrease: "//div[@class='minus']",
    closeBtn:"//div[@class='removeProduct iconCss iconX']",
    addToCart: "//button[text()='ADD TO CART']",
    shoppingCart: "//a[@id='shoppingCartLink']",
  };

  async clickOnProductTablet() {
    await this.page.locator(this.Elements.tablets).click();
  }

  async selectProduct() {
    await this.page.locator(this.Elements.productName).click();
  }

  async addQuantity() {
    await this.page.locator(this.Elements.quantityIncrease).click();
  }

  async clickOnAddToCart() {
    await this.page.locator(this.Elements.addToCart).click({force:true});
  }

  async clickCloseBtn() {
    await this.page.locator(this.Elements.closeBtn).click();
  }

  async clickShoppingCartBtn() {
    await this.page.locator(this.Elements.shoppingCart).click();
  }
}
