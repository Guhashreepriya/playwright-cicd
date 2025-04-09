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

test("TC_02 Advantage Shopping - ", async ({ page }) => {
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
  
  await login.enterUserName(data.username1);
  await login.enterPassword(data.password1);
})