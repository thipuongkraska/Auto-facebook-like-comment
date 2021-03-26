const puppeteer = require("puppeteer");

const fbUrl = "https://m.facebook.com/";
const env = require("./config/env");
const {email, password} = env;

const main = async () => {
  //// launch browser and open a new page ----------
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  //// go to a link --------
    await page.goto(fbUrl, {
      waitUntil: "networkidle2",
    });
    // const tag = "a[href='#']"
    // await page.click("a[href='#']");
    await page.waitFor(1250);
    //--- Signin Facebook ----
    await page.type("#m_login_email", email);
    await page.waitFor(1000);
    await page.type("#m_login_password", password);
    await page.waitFor(500);
    await page.click("button[name='login']");
    //--- Click on No Thanks ----
    await page.waitForNavigation({
      waitUntil: "networkidle2",
    });
    await page.click("._54k8._56bs._26vk._56b_._56bw._56bt");
    //--- Loops for Like and comment ----

    const runFb = async () => {
      let page2 = await browser.newPage();
      await page2.goto("https://m.facebook.com/?_rdr", {
        waitUntil: "networkidle2",
      })
      let cmt = await page2.$x("//a[contains(text(), 'Comment')]");
      let list = await page2.$x("//a[contains(text(), 'Like')]");
      await list[i].click();
      await page2.waitFor(500);
      await cmt[i+4].click();
      await page2.waitForNavigation({
        waitUntil: "networkidle2",
      });
      await page2.waitFor(5000);
      await page2.click(".mentions");
      await page2.type("input[name='comment_text']", "Like");
      await page2.waitFor(2500);
      await page2.click("button[name='submit']");
      await page2.waitFor(800);
      // await page2.click("a[data-sigil='MBackNavBarClick']");
      // await page2.waitForNavigation({
      //   waitUntil: "networkidle2",
      // });
      await page2.close();
    };

  (setInterval(runFb, 1000000))();

    console.log("finis");
}
 main();
