import {Given, When, Then} from '@cucumber/cucumber'
import {expect} from '@playwright/test'
import {pageFixture} from '../hooks/pageFixture';
import {commonLocators} from "../locators/common";


Given(/^User checks that main elements visible on main page$/, async function () {
    await expect(pageFixture.page.locator(commonLocators.searchField)).toBeVisible()
    await expect(pageFixture.page.locator(commonLocators.logo)).toBeVisible()
    await expect(pageFixture.page.locator(commonLocators.menu)).toBeVisible()
    await expect(pageFixture.page.locator(commonLocators.navbar)).toBeVisible()
    await expect(pageFixture.page.locator(commonLocators.banner)).toBeVisible()
    await expect(pageFixture.page.locator(commonLocators.reviews)).toBeVisible()
    await expect(pageFixture.page.locator(commonLocators.categories)).toBeVisible()
    await expect(pageFixture.page.locator(commonLocators.products)).toBeVisible()
    await expect(pageFixture.page.locator(commonLocators.footer)).toBeVisible()
    expect(await pageFixture.page.locator(commonLocators.freeDeliveryBanner).count()).toBeGreaterThanOrEqual(2)
});