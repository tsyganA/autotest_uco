const puppeteer = require('puppeteer');
const assert = require('chai').assert;


async function sizeBrowser (page) {
await page.setViewport({
  width: 1366,
  height: 610,
  deviceScaleFactor: 1,
});
}


// async function sizeBrowser (page) {
// await page.setViewport({
//   width: 1420,
//   height: 1080,
//   deviceScaleFactor: 1,
// });
// }




async function elementDelete (page, xpath) {
let twoDelete = (await page.$x(xpath))[0];
let twoElement = await page.evaluate(el => el.value, twoDelete);
    for (let i = 0; i < twoElement.length; i++) {
    await page.keyboard.press('Delete');
    } 
}






describe('ClientUpdateInformation', function() {
    let browser;

  before(async function() {
    this.timeout(0);
    browser = await puppeteer.launch({
       headless: false,
    // devtools: true,
      });
  });
  

  after(async function() {
    this.timeout(0);
    await browser.close();
  });
 
 
   it('ClientUpdateInformation!!!!!!!', function(done) {

(async () => {
  this.retries(2);
     this.timeout(100000);
     
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();

await sizeBrowser (page);

await page.goto('https://staging.fixdigital.co.il');


    await page.waitForTimeout(2000);

// login                   
    await page.waitForSelector(`#UserName`);
await page.type(`#UserName`, "fixtest19@gmail.com");

    await page.waitForTimeout(1000);
// password
    await page.waitForSelector(`#Password`);
await page.type(`#Password`, "123456");

    await page.waitForTimeout(1000);
// button login  
    await page.waitForSelector(`body > div.login-page > div.login-page-form > form > div.form-buttons > button`);
await page.click(`body > div.login-page > div.login-page-form > form > div.form-buttons > button`)
    console.log("Login success!"); 

    await page.waitForTimeout(1000);
// tab clients                 
    await page.waitForSelector(`#app > header > nav.nav-header > div > ul > li:nth-child(2) > a > div > div.tooltip-trigger > div`);
await page.click(`#app > header > nav.nav-header > div > ul > li:nth-child(2) > a > div > div.tooltip-trigger > div`)
    console.log("Tab Clients!");     

    await page.waitForTimeout(1000);
// input ClientUpdateInformation
    await page.waitForSelector(`#clients-search`);
await page.type(`#clients-search`, "ClientUpdateInformation");    

    await page.waitForTimeout(1000);
// button search
    await page.waitForSelector(`#clients-search-btn`);
await page.click(`#clients-search-btn`)
    console.log("Button Search!");  

    await page.waitForTimeout(2000);
// edit wizard                  
    await page.waitForSelector(`a[tooltip-key='Edit']`);
await page.click(`a[tooltip-key='Edit']`)
    console.log("Button edit wizard!");

    await page.waitForTimeout(3000);
// button update client Information
    await page.waitForSelector(`body > main > div > div > div > div.card-block > div > div.getstarted-content-container.col-xl-8.col-md-12 > div > div:nth-child(1) > div.offset-sm-0.col-sm-4.offset-xs-2 > a`);
await page.click(`body > main > div > div > div > div.card-block > div > div.getstarted-content-container.col-xl-8.col-md-12 > div > div:nth-child(1) > div.offset-sm-0.col-sm-4.offset-xs-2 > a`)

    console.log("Button update client Information!");            

    await page.waitForTimeout(1000);
// client name
    await page.waitForSelector(`#Title`);
await page.type(`#Title`, "");

        await elementDelete (page, "/html/body/main/div/div/div[2]/div/div[1]/div[2]/form/div/div[3]/div/div/div[1]/input")

// client name
    await page.waitForSelector(`#Title`);
await page.type(`#Title`, "TestQA");
    console.log('TestQA!');  

    await page.waitForTimeout(1000);
// How many workers company have?
    await page.waitForSelector(`#WorkersCount`);
await page.click(`#WorkersCount`)

    await page.waitForTimeout(1000);
// How many workers company have? 6 of 10!
await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000)
await page.keyboard.press('Enter');
    console.log('6 of 10!');

    await page.waitForTimeout(1000);
// button save
    await page.waitForSelector(`#submit-form-button`);
await page.click(`#submit-form-button`)
    console.log('Save information!');          




    await page.waitForTimeout(2000);
// button update client Information
    await page.waitForSelector(`body > main > div > div > div > div.card-block > div > div.getstarted-content-container.col-xl-8.col-md-12 > div > div:nth-child(1) > div.offset-sm-0.col-sm-4.offset-xs-2 > a`);
await page.click(`body > main > div > div > div > div.card-block > div > div.getstarted-content-container.col-xl-8.col-md-12 > div > div:nth-child(1) > div.offset-sm-0.col-sm-4.offset-xs-2 > a`)

    console.log("Button update client Information!");            

    await page.waitForTimeout(1000);
// client name
    await page.waitForSelector(`#Title`);
await page.type(`#Title`, "");

        await elementDelete (page, "/html/body/main/div/div/div[2]/div/div[1]/div[2]/form/div/div[3]/div/div/div[1]/input")

// client name
    await page.waitForSelector(`#Title`);
await page.type(`#Title`, "ClientUpdateInformation");
    console.log('ClientUpdateInformation!');    

    await page.waitForTimeout(1000);
// How many workers company have?
    await page.waitForSelector(`#WorkersCount`);
await page.click(`#WorkersCount`)

    await page.waitForTimeout(1000);
// How many workers company have?2 of 5!
await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(1000)
await page.keyboard.press('Enter');
    console.log('2 of 5!');

    await page.waitForTimeout(1000);
// button save
    await page.waitForSelector(`#submit-form-button`);
await page.click(`#submit-form-button`)
    console.log('Save information!');    



    await page.waitForTimeout(2000);
// select logout
    await page.waitForSelector(`body > header > div > ul > li.nav-item.dropdown.username-li`);
await page.click(`body > header > div > ul > li.nav-item.dropdown.username-li`)  

    await page.waitForTimeout(2000);
// button logout
    await page.waitForSelector(`body > header > div > ul > li.nav-item.dropdown.username-li.open > div > a.dropdown-item.top-border`);
await page.click(`body > header > div > ul > li.nav-item.dropdown.username-li.open > div > a.dropdown-item.top-border`)  
    console.log('Logout success!');



      await page.waitForTimeout(2000);

await page.close();
      done();
    })();
  });



})