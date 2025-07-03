import { expect } from '@playwright/test';
import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { pageFixtures } from '../utilities/pageFixtures';
import { LoginPage } from '../pageObjects/loginPage';

let loginPage: LoginPage;

Given('I am on the login page', async function () {
    loginPage = new LoginPage(pageFixtures.page);
    await loginPage.goto();
    console.log('Navigated to the login page');
});

When('I enter the username as {string}', async function (username) {
    await loginPage.enterUsername(username);
    console.log(`Username entered: ${username}`);    
});

When('I enter the password as {string}', async function (password) {
    await loginPage.enterPassword(password);
    console.log(`Password entered: ${password}`);
});

When('I click the login button', async function () {
    await loginPage.clickLogin();
    console.log('Login button clicked');
});

Then('I should be redirected to the product inventrory page', async function () {
    const label = await loginPage.isOnInventoryPage();
    expect(label).toContain('Products');
    console.log('Successfully redirected to the product inventory page');
    await pageFixtures.page.waitForTimeout(2000);
});

Then('I should see an error message indicating invalid credentials', async function () {
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Epic sadface: Username and password do not match any user in this service');
    console.log('Error message displayed:', errorMsg);
});
