import {Given, When, Then} from '@cucumber/cucumber'
import {expect} from '@playwright/test'
import {pageFixture} from '../hooks/pageFixture';
import {log} from "util";
import {commonLocators} from "../locators/common";


Then(/^User navigates to '(.*)'$/, async function (page: string) {
    switch (page) {
        case 'sweet shop app':
            await pageFixture.page.goto('https://max1irst.github.io/sweet-shop-app-react/#/sweet-shop-app')
            await pageFixture.page.waitForLoadState()
            break;
    }
});

When(/^User add product '(.*)' to cart$/, async function (productName: string) {
    await pageFixture.page.locator(`.product-item:has-text("${productName}")`).locator('.product-btn').click()
})

Given('User get quantity of items in cart from counter above cart icon in navbar', async function () {
    this.parameters.cartQuantity = await pageFixture.page.locator('.menu a .counter').textContent()
})

Then(/^Cart items counter increased for (.*)$/, async function (number: number) {
    const currentCartQuantity = await pageFixture.page.locator('.menu a .counter').textContent()
    expect(Number(currentCartQuantity)).toBe(Number(this.parameters.cartQuantity + number))
})

Then(/^Get (.*) toast message that '(.*)'$/, async function (messageType: string, messageText: string) {
    switch (messageType) {
        case 'success':
            await pageFixture.page.locator(`.Toastify__toast--success:has-text("${messageText}")`).waitFor({state: "visible"})
            await pageFixture.page.locator(`.Toastify__toast--success:has-text("${messageText}")`).waitFor({state: "hidden"})
            break;
        case 'info':
            await pageFixture.page.locator(`.Toastify__toast--info:has-text("${messageText}")`).waitFor({state: "visible"})
            await pageFixture.page.locator(`.Toastify__toast--info:has-text("${messageText}")`).waitFor({state: "hidden"})
            break;
    }
})

Given(/^User open '(.*)' page$/, async function (page: string) {
    await pageFixture.page.locator(`a[href="#/${page}"]`).click()
})

When(/^Cart items in cart should be (.*) and total sum equal '(.*)'$/, async function (totalCartItems: string, totalCartSum: string) {
    expect(await pageFixture.page.locator('.cartItem').count()).toBe(Number(totalCartItems))
    await pageFixture.page.locator('.sub-total').textContent().then((el: any) => expect(el.split(' ')[1].toString()).toBe(totalCartSum))
});

Then(/^User see that title block has text '(.*)'$/, async function (titleText: string) {
    await expect(pageFixture.page.locator('.title-block h1')).toHaveText(titleText)
})

Then(/^User checks that the navbar links work correctly and main content visible on all pages$/, async function () {
    const linksCount = await pageFixture.page.locator('.nav ul li').count()
    for (let i = 0; i < linksCount; i++) {
        let linkName = await pageFixture.page.locator('.nav ul li').nth(i).textContent()
        await pageFixture.page.locator('.nav ul li').nth(i).click()
        let pageTitle = await pageFixture.page.locator('.title-block h1').textContent()
        expect(linkName).toBe(pageTitle)
        await expect(pageFixture.page.locator(commonLocators.redInfo)).toBeVisible()
        await expect(pageFixture.page.locator(commonLocators.sortProducts)).toBeVisible()
        await expect(pageFixture.page.locator(commonLocators.reviews)).toBeVisible()
        await expect(pageFixture.page.locator(commonLocators.footer)).toBeVisible()
        expect(await pageFixture.page.locator(commonLocators.freeDeliveryBanner).count()).toBeGreaterThanOrEqual(1)
    }
})