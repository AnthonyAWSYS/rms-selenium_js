import { until } from 'selenium-webdriver.js';
import { loginSelectors } from './selector.js';

async function login(browser) {
        const driver = browser;
        await driver.get(process.env.TEST_BASE_URL);

        const emailInput = await driver.findElement(loginSelectors.emailInput);
        const passwordInput = await driver.findElement(loginSelectors.passwordInput);
        const loginButton = await driver.findElement(loginSelectors.loginButton);

        await emailInput.clear();
        await passwordInput.clear();
        await emailInput.sendKeys(_login.email);
        await passwordInput.sendKeys(_login.password);
        await loginButton.click();

        await driver.wait(until.urlContains('resource-utilization'), 10000);
        await driver.sleep(1000);
}

export default { login };