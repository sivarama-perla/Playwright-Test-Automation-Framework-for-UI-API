import { chromium, Browser, BrowserContext, Page} from '@playwright/test'
import { BeforeAll, AfterAll, After, setDefaultTimeout } from '@cucumber/cucumber';
import { pageFixtures } from './pageFixtures';

let page: Page;
let browser: Browser;
let browserContext: BrowserContext;

BeforeAll(async ()=> {
    browser = await chromium.launch({ headless: false });
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
    pageFixtures.page = await page;
})

AfterAll(async ()=> {
    await browser.close();
    console.log('Browser closed');   
})

After(async function({pickle}){
    if (pageFixtures.page.url() === 'about:blank') {
        // Skip screenshot if no page is loaded like for API-only tests, this shall skip taking screenshots
        return;
    }
    const screenshotName = pickle.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const image = await pageFixtures.page.screenshot({ path: `./test-result/screenshot/${screenshotName}.png`, type:'png'});
    await this.attach?.(image, 'image/png');    
})