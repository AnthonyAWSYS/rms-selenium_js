/**
 * TC_FE_Login_001
 * 
 * (Functionality)
 * Verify User's Ability to Successfully Login and Access the Dashboard
 */

import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import fs from 'fs';
import path from 'path';
import assert from 'assert';

const loginUrl = process.env.TEST_BASE_URL;
const screenshotDir = './reports/screenshots/1-login';

if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

const emailField = '//*[@id="floatingInput"]';
const passwordField = '//*[@id="floatingPassword"]';
const loginButton = '//*[@id="root"]/div/div[2]/div/div[2]/form/div[3]/button';
const errorField = '//*[@id="root"]/div/div[2]/div/div[2]/form/div[3]/p';

const validUser = {
  email: `${process.env.TEST_EMAIL_PREFIX}${process.env.TEST_EMAIL_DOMAIN}`,
  password: process.env.TEST_PASSWORD
};

async function takeScreenshot(driver, filename) {
  const screenshot = await driver.takeScreenshot();
  const filepath = path.join(screenshotDir, filename);
  fs.writeFileSync(filepath, screenshot, 'base64');
  console.log(`📸 Screenshot saved -> ${filepath}`);
}

function buildDriver() {
  const options = new chrome.Options();
  options.addArguments("--headless=new");
  options.addArguments("--disable-background-networking");
  return new Builder().forBrowser("chrome").setChromeOptions(options).build();
}

describe("TC_FE_Login_001", function () {

  describe("(Functionality) Verify User's Ability to Successfully Login and Access the Dashboard", function () {

    this.timeout(30000);
    let driver;

    beforeEach(async function () {
      driver = await buildDriver();
    });

    afterEach(async function () {
      if (driver) await driver.quit();
    });

    it("Valid user credentials able to login", async function () {
      try {
        // Step 1: Open a browser and navigate to the following URL: https://test.rms2.awsys-i.com/
        await driver.get(loginUrl);
        console.log(`  Navigated to: ${loginUrl}`);

        // Step 2: Wait for the page to load completely
        await driver.wait(until.elementLocated(By.xpath(emailField)), 10000);
        console.log(`  Page loaded completely`);

        // Step 3: Observe if the Login Page (RMS Landing/Login page) is displayed successfully
        const isEmailDisplayed = await driver.findElement(By.xpath(emailField)).isDisplayed();
        const isPasswordDisplayed = await driver.findElement(By.xpath(passwordField)).isDisplayed();
        console.log(`  Login page displayed: Email=${isEmailDisplayed}, Password=${isPasswordDisplayed}`);

        // Verify login page loaded successfully
        assert(isEmailDisplayed && isPasswordDisplayed, "Login page components not displayed");

        // Additional: Complete login flow
        await driver.findElement(By.xpath(emailField)).sendKeys(validUser.email);
        console.log(`  Entered email: ${validUser.email}`);

        await driver.findElement(By.xpath(passwordField)).sendKeys(validUser.password);
        console.log(`  Entered password: ********`);

        await driver.findElement(By.xpath(loginButton)).click();
        console.log(`  Clicked Login button`);

        await driver.wait(until.urlContains("resource-utilization"), 10000);

        await takeScreenshot(driver, 'TC_FE_Login_001-Verification.png');

        console.log(`✅ User logged in successfully | Redirected to: ${await driver.getCurrentUrl()}`);
        console.log(`Expected: The RMS Landing/Login page should load successfully without errors`);

      } catch (error) {
        let errorText = "Unable to capture error";
        try {
          errorText = await driver.findElement(By.xpath(errorField)).getText();
        } catch (e) {
          console.log(`  No error message element found`);
        }
        await takeScreenshot(driver, 'TC_FE_Login_001-Failure.png');
        console.error(`❌ Login failed | Actual Result: "${errorText}"`);
        throw new Error(`Actual Result: "${errorText}"`);
      }
    });

  });

});