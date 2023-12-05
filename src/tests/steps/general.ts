import {Given, When, Then} from '@cucumber/cucumber'
import {expect} from '@playwright/test'
import {pageFixture} from '../hooks/pageFixture';


Then(/^User navigates to '(.*)'$/, async function (page:string) {
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

Then(/^Get (.*) toast message that '(.*)'$/, async function (messageType:string, messageText:string) {
    switch (messageType) {
        case 'success':
            await pageFixture.page.locator(`.Toastify__toast--success:has-text("${messageText}")`).waitFor({state:"visible"})
            await pageFixture.page.locator(`.Toastify__toast--success:has-text("${messageText}")`).waitFor({state:"hidden"})
            break;
        case 'info':
            await pageFixture.page.locator(`.Toastify__toast--info:has-text("${messageText}")`).waitFor({state:"visible"})
            await pageFixture.page.locator(`.Toastify__toast--info:has-text("${messageText}")`).waitFor({state:"hidden"})
            break;
    }
})

Given(/^User open '(.*)' page$/, async function (page:string){
        await pageFixture.page.locator(`a[href="#/${page}"]`).click()
})