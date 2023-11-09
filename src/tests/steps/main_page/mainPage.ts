import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { pageFixture } from '../../hooks/pageFixture';
import { mainPageLocators } from '../../locators/mainPage';


Given(/^User checks that main elements visible on Products page$/, async function () {
    await expect(pageFixture.page.locator(mainPageLocators.searchField)).toBeVisible()
    await expect(pageFixture.page.locator(mainPageLocators.logo)).toBeVisible()
    await expect(pageFixture.page.locator(mainPageLocators.menu)).toBeVisible()
    await expect(pageFixture.page.locator(mainPageLocators.navbar)).toBeVisible()
    await expect(pageFixture.page.locator(mainPageLocators.banner)).toBeVisible()
    await expect(pageFixture.page.locator(mainPageLocators.reviews)).toBeVisible()
    await expect(pageFixture.page.locator(mainPageLocators.categories)).toBeVisible()
    await expect(pageFixture.page.locator(mainPageLocators.products)).toBeVisible()
    await expect(pageFixture.page.locator(mainPageLocators.footer)).toBeVisible()
    expect(await pageFixture.page.locator(mainPageLocators.freeDeliveryBanner).count()).toBeGreaterThanOrEqual(2)
});

Then(/^User checks that the navbar links work correctly on Products page$/, async function () {
    const linkscount = await pageFixture.page.locator('.nav ul li').count()
    for (let i = 0; i < linkscount; i++) {
        let linkName = await pageFixture.page.locator('.nav ul li').nth(i).textContent()
        await pageFixture.page.locator('.nav ul li').nth(i).click()
        let pageTitle = await pageFixture.page.locator('.title-block h1').textContent()
        expect(linkName).toBe(pageTitle)
    }
})