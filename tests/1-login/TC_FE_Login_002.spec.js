/**
 * TC_FE_Login_002
 * 
 * (Security)
 * HTTPS Enforcement
 * Verify that the login page is served over HTTPS
 */

import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import fs from 'fs';
import path from 'path';
import assert from 'assert';

const loginUrl = process.env.TEST_BASE_URL;
const screenshotDir = './reports/screenshots/1-login';

if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

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

describe("TC_FE_Login_002", function () {

  describe("(Security) HTTPS Enforcement", function () {

    this.timeout(30000);
    let driver;

    beforeEach(async function () {
      driver = await buildDriver();
    });

    afterEach(async function () {
      if (driver) await driver.quit();
    });

    it("Page should automatically redirect to HTTPS", async function () {
      try {
        // Step 1: Open a browser and navigate to the following URL: https://test.rms2.awsys-i.com/
        await driver.get(loginUrl);
        console.log(`  Navigated to: ${loginUrl}`);

        // Step 2: Observe if the request is redirected or blocked
        const httpUrl = loginUrl.replace('https://', 'http://');
        await driver.get(httpUrl);
        await driver.sleep(2000);
        const currentUrl = await driver.getCurrentUrl();
        console.log(`  HTTP URL: ${httpUrl}`);
        console.log(`  Current URL after redirect: ${currentUrl}`);

        // Step 3: Open browser Dev Tools → Network tab and inspect request protocol
        const isHttps = currentUrl.startsWith('https://');
        console.log(`  Protocol: ${isHttps ? 'HTTPS' : 'HTTP'}`);

        await takeScreenshot(driver, 'TC_FE_Login_002-Verification.png');

        assert(isHttps, `Page should be served over HTTPS. Current URL: ${currentUrl}`);
        console.log(`✅ HTTPS enforced | Actual URL: "${currentUrl}"`);
        console.log(`Expected: The page should automatically redirect to "https://"`);

      } catch (error) {
        await takeScreenshot(driver, 'TC_FE_Login_002-Failure.png');
        console.error(`❌ HTTPS check failed | Actual Result: "${error.message}"`);
        throw error;
      }
    });

  });

});