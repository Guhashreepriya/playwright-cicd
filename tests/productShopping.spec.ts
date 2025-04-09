import { test, expect } from "@playwright/test";
import LoginPage from "./pages/loginPage";
import productPage from "./pages/products";
import PlaywrightWrapper from "./helper/wrapper";
import cartPage from "./pages/checkOut";
import * as fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

//Read data from CSV
const csvFilePath = path.join(__dirname, "input.csv");
const csvData = fs.readFileSync(csvFilePath, "utf8");
const testData = parse(csvData, { columns: true });

//Read data from JSON file
const data = JSON.parse(JSON.stringify(require("../testData.json")));

let login: LoginPage;
let product: productPage;
let cart: cartPage;

test("TC_01 Advantage Shopping - Place Order", async ({ page }) => {
  for (const row of testData) {
    // Use the data from the CSV file
    console.log(`Username =>  ${row.UserName}`);
    console.log(`Paswword =>  ${row.Password}`);
  }
  console.log(data.username);
  login = new LoginPage(page);
  await login.navigateToLoginPage("https://advantageonlineshopping.com/");
  await page.waitForTimeout(2000);
  await login.clickOnUserIcon();

  await login.enterUserName(data.username);
  await login.enterPassword(data.password);
  await login.clickLoginButton();
  await page.waitForTimeout(4000);

  product = new productPage(page);
  await product.clickOnProductTablet();
  await product.selectProduct();
  await product.addQuantity();
  await product.clickOnAddToCart();
  // await product.clickCloseBtn();
  await product.clickShoppingCartBtn();

  cart = new cartPage(page);
  await cart.clickCheckOut();
  await cart.clickNext();
  await cart.enterSafePayPassword();
  await cart.entersafePayUserName();
  await cart.payNow();
  await cart.storeTrackingNum();
  // await page.waitForTimeout(8000);
});
