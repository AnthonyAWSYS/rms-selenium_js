/**
 * Concurrent Login Test
 *
 * This script simulates multiple users logging into the RMSv2 web application
 * simultaneously using Selenium WebDriver with headless Chrome. It runs in batches 
 * of 10 to avoid overloading the machine over a 100 concurrent users, waits for a 
 * successful redirect to the resource-utilization page after each login, and reports
 * the result and duration for each user session.
 * 
 */
import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import dotenv from 'dotenv';

dotenv.config();

const loginUrl = process.env.TEST_BASE_URL;

const emailField = '//*[@id="floatingInput"]';
const passwordField = '//*[@id="floatingPassword"]';
const loginButton = '//*[@id="root"]/div/div[2]/div/div[2]/form/div[3]/button';

const concurrentUsers = parseInt(process.env.CONCURRENT_USERS) || 10;
const batchSize = parseInt(process.env.BATCH_SIZE) || 3;

// Generate test users
const users = Array.from({ length: concurrentUsers }, (_, i) => ({
    email: `${process.env.TEST_EMAIL_PREFIX}${process.env.TEST_EMAIL_DOMAIN}`,
    password: process.env.TEST_PASSWORD
}));

console.log("ENV CHECK:", process.env.TEST_BASE_URL, process.env.TEST_EMAIL_PREFIX);

async function login(user) {

    let driver;

    const options = new chrome.Options();
    options.addArguments("--headless=new");

    try {

        driver = await new Builder()
            .forBrowser("chrome")
            .setChromeOptions(options)
            .build();

        const start = Date.now();

        await driver.get(loginUrl);

        await driver.findElement(By.xpath(emailField)).sendKeys(user.email);
        await driver.findElement(By.xpath(passwordField)).sendKeys(user.password);

        await driver.findElement(By.xpath(loginButton)).click();

        // Wait for login redirect
        await driver.wait(until.urlContains("resource-utilization"), 10000);

        const currentUrl = await driver.getCurrentUrl();

        // Explicit assertion — fail if not on dashboard
        if (!currentUrl.includes("resource-utilization")) {
            throw new Error(`Expected resource-utilization URL, got: ${currentUrl}`);
        }

        const duration = Date.now() - start;
        console.log(`✅ ${user.email} logged in -> ${currentUrl} (${duration}ms)`);

    } catch (error) {

        // Take screenshot on failure
        if (driver) {
            const screenshot = await driver.takeScreenshot();
            const fs = await import('fs');
            fs.writeFileSync(`failure-${user.email}.png`, screenshot, 'base64');
            console.error(`📸 Screenshot saved: failure-${user.email}.png`);
        }

        console.error(`❌ Login failed for ${user.email}`);
        console.error(error.message);
        throw error;

    } finally {

        if (driver) {
            await driver.quit();
        }

    }
}

async function runInBatches(users, batchSize) {
    const results = [];
    for (let i = 0; i < users.length; i += batchSize) {
        const batch = users.slice(i, i + batchSize);
        console.log(`\n🚀 Running batch ${Math.floor(i / batchSize) + 1} (users ${i + 1}–${i + batch.length})`);
        const batchResults = await Promise.all(batch.map(user => login(user)));
        results.push(...batchResults);
    }
    return results;
}

describe("Concurrent Login Test", function () {

    this.timeout(25000);

    it(`should attempt ${concurrentUsers} logins in batches of ${batchSize}`, async function () {

        await runInBatches(users, batchSize);

    });

});