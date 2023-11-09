import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { pageFixture } from '../hooks/pageFixture';


Then(/^User navigates to sweet shop app$/, async function () {
    await pageFixture.page.goto('https://max1irst.github.io/sweet-shop-app-react/#/sweet-shop-app')
    await pageFixture.page.waitForLoadState()
});