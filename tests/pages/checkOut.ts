import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper";

export default class cartPage {
  private base: PlaywrightWrapper;
  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    checkOut: "//button[@id='checkOutButton']",
    nextButton: "(//button[@id='next_btn'])[1]",
    safePayUserName: "//input[@name='safepay_username']",
    safePayPassword: "//input[@name='safepay_password']",
    trackingNumber: "//label[@id='trackingNumberLabel']",
    payNowButton: "(//button[text()='PAY NOW'])[1]",
  };

  async clickCheckOut() {
    await this.page.locator(this.Elements.checkOut).click();
  }
  async clickNext() {
    await this.page.locator(this.Elements.nextButton).click();
  }
  async entersafePayUserName() {
    await this.page.locator(this.Elements.safePayUserName).fill("pay123");
  }
  async enterSafePayPassword() {
    await this.page.locator(this.Elements.safePayPassword).fill("Pay123");
  }
  async storeTrackingNum() {
    
    await this.page.waitForSelector(this.Elements.trackingNumber, { state: 'visible' });
    const text = await this.page
      .locator(this.Elements.trackingNumber)
      .textContent();
    console.log(text);
  }
  async payNow() {
    await this.page.locator(this.Elements.payNowButton).click({force:true});
  }
}
