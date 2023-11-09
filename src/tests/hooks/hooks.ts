import { BeforeAll, AfterAll, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser
let page: Page
setDefaultTimeout(60 * 2000)
BeforeAll(async function () {
    browser = await chromium.launch({ headless: false })
    page = await browser.newPage()
    pageFixture.page = page
})

AfterAll(async function () {
    await pageFixture.page.close()
    await browser.close()
})