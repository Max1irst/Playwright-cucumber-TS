import {Then, When} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import {pageFixture} from "../hooks/pageFixture";

Then('User see that cart is empty', async function () {
    await expect(pageFixture.page.locator('.cart-block h2')).toHaveText('Shopping Cart')
    await expect(pageFixture.page.locator('.emptyCart h3')).toHaveText(('Cart is empty'))
})
Then(/^User click on '(.*)' button on cart page$/, async function (element: string) {
    switch (element) {
        case 'start shopping':
            await pageFixture.page.locator('.emptyCart a').click()
            break;
        case 'clear cart':
            await pageFixture.page.locator('button.clear-cart').click()
            break;
    }
})

When(/^User remove product '(.*)' from the cart$/, async function (productName: string) {
    await pageFixture.page.locator(`.cartItem div:has-text("${productName}")`).locator('button.remove').click()
})
