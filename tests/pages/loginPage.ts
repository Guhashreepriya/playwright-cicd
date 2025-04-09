import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper";

export default class LoginPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        userIcon:"//a[@id='hrefUserIcon']",
        userName: "//input[@name='username']",
        password: "//input[@name='password']",
        loginBtn: "//button[@id='sign_in_btn']",
        errorMessage: "alert"
    }

    async navigateToLoginPage(url: string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded"
        });
        await expect(this.page).toHaveTitle("Advantage Shopping");
    }

    async clickOnUserIcon(){
        await this.page.locator(this.Elements.userIcon).click();
    }
    async enterUserName(user: string) {
        await this.page.locator(this.Elements.userName).fill(user);
    }
    async enterPassword(Password: string) {
        await this.page.locator(this.Elements.password).fill(Password);
    }

    async clickLoginButton() {
        await this.base.waitAndClick(this.Elements.loginBtn);
    }

    getErrorMessage() {
        return this.page.getByRole("alert");
    }

    async loginUser(user: string, password: string) {
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }


}