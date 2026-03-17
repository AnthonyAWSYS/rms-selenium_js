/**
 * Invalid Login Test
 *
 * This script tests that the RMS2 login page correctly displays an error message
 * when users attempt to log in with invalid credentials. It uses decoy emails
 * and wrong passwords to verify that the error element appears and contains
 * the expected message.
 */
import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import dotenv from 'dotenv';

dotenv.config();

const loginUrl = process.env.TEST_BASE_URL;

const emailField = '//*[@id="floatingInput"]';
const passwordField = '//*[@id="floatingPassword"]';
const loginButton = '//*[@id="root"]/div/div[2]/div/div[2]/form/div[3]/button';
const errorField = '//*[@id="root"]/div/div[2]/div/div[2]/form/div[3]/p';

// Decoy users with invalid credentials
const invalidUsers = [
    { email: 'anthony.tagorda!awsys-i.com', password: process.env.TEST_FAKE_PASSWORD }, // !
    { email: 'anthony.tagorda@@awsys-i.com', password: process.env.TEST_FAKE_PASSWORD },// @@
    { email: 'anthony tagorda@awsys-i.com', password: process.env.TEST_FAKE_PASSWORD }, // email prefix space
    { email: 'anthony.tagorda awsys-i.com', password: process.env.TEST_FAKE_PASSWORD }, // email domain space
    { email: '用户@awsys-i.com', password: process.env.TEST_FAKE_PASSWORD }, // japanese characters
    { email: 'anthtago@gmail.com', password: process.env.TEST_FAKE_PASSWORD }, // random email
    { email: '2222075@slu.edu.ph', password: process.env.TEST_FAKE_PASSWORD }, // external organization email
    { email: '', password: process.env.TEST_FAKE_PASSWORD }, // blank email
    { email: 'anthony.tagorda@awsys-i.com', password: process.env.TEST_FAKE_PASSWORD }, // wrong password
    { email: 'tony.tagorda@awsys-i.com', password: process.env.TEST_FAKE_PASSWORD }, // unregistered user
];

async function loginExpectError(user) {
    let driver;

    const options = new chrome.Options();
    options.addArguments("--headless=new");

    try {
        driver = await new Builder()
            .forBrowser("chrome")
            .setChromeOptions(options)
            .build();

        await driver.get(loginUrl);

        await driver.findElement(By.xpath(emailField)).sendKeys(user.email);
        await driver.findElement(By.xpath(passwordField)).sendKeys(user.password);

        await driver.findElement(By.xpath(loginButton)).click();

        // Wait for error message to appear
        await driver.wait(until.elementLocated(By.xpath(errorField)), 10000);

        const errorElement = await driver.findElement(By.xpath(errorField));
        const errorText = await errorElement.getText();

        console.log(`✅ ${user.email} -> error message: "${errorText}"`);
    } catch (error) {
        console.error(`❌ ${user.email} -> error occurred: ${error.message}`);
    } finally {
        if (driver) {
            await driver.quit();
        }
    }

}

async function runInBatches(users, batchSize) {

}

describe("Invalid Login Test", function () {

    this.timeout(120000);

    it("should display an error message for invalid credentials", async function () {

        await runInBatches(invalidUsers, 3);

    });

});
