import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://www.saucedemo.com/v1/');
    }

    async enterUsername(username: string) {
        await this.page.fill('#user-name', username);
    }

    async enterPassword(password: string) {
        await this.page.fill('#password', password);
    }

    async clickLogin() {
        await this.page.click('#login-button');
    }

    async isOnInventoryPage() {
        await this.page.waitForURL('https://www.saucedemo.com/v1/inventory.html');
        return await this.page.locator("//div[@class='product_label']").textContent();
    }

    async getErrorMessage() {
        return await this.page.locator("h3[data-test='error']").textContent();
    }
}