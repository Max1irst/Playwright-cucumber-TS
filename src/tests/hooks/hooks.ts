import { BeforeAll, AfterAll, setDefaultTimeout, Before, After, Status, AfterStep } from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { config } from "../../../playwright.config";

let browser: Browser
let context: BrowserContext
setDefaultTimeout(60 * 2000)

BeforeAll(async function () {
    browser = await chromium.launch(config)
})

Before(async function () {
    context = await browser.newContext()
    const page = await context.newPage()
    pageFixture.page = page
})

AfterStep(async function ({ pickle, result }) {
    if (result?.status == Status.FAILED) {
        const img = await pageFixture.page.screenshot({ path: `./reports/screenshots/${pickle}.png` })
        this.attach(img, 'image/png')
    }
})

After(async function () {
    await pageFixture.page.close()
    await context.close()
})

AfterAll(async function () {
    // await browser.close()
})