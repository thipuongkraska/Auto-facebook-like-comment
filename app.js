const puppeteer = require("puppeteer");

const fbUrl = "https://m.facebook.com/";
const env = require("./config/env");
const {email, password} = env;
( async () => {

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
        //////////////////////to do list
  setInterval(async () => {
    await page.goto("https://m.facebook.com/?_rdr", {
      waitUntil: "networkidle2",
    });
    let cmt = await page.$x("//a[contains(text(), 'Bình luận')]");
    let list = await page.$x("//a[contains(text(), 'Thích')]");
    console.log(list);
    let x = Math.random();
    x = Math.floor(x*3);
    console.log(x);
    let y = Math.random();
    let z = Math.random();
    y = Math.floor(y*3);
    z= Math.floor(z*3);
    await list[x].click();
    await list[x+y].click();
    await list[x+z].click();
    let a = Math.floor();
    a = Math.floor(a*200);
    await page.waitFor(a);
    await cmt[z].click();
    await page.waitForNavigation({
      waitUntil: "networkidle2",
    });
    // let b = Math.random();
    // b = Math.floor(b*1000);
    await page.waitFor(3000);
    await page.click(".mentions");
    await page.type("input[name='comment_text']", "Day la tin nhan tu dong, mong cac ban thong cam, minh dang test 1 chut thoi");
    let c = Math.random();
    c = Math.floor(c*300);
    await page.waitFor(c);
    await page.click("button[name='submit']");
    let d = Math.random();
    d = Math.floor(d*100);
    await page.waitFor(d);
    // await page2.click("a[data-sigil='MBackNavBarClick']");
    // await page2.waitForNavigation({
    //   waitUntil: "networkidle2",
    // });
    // await page.close();
      console.log("finis");
  }, 50000);
})();


///<button type="submit" value="Đăng" class="_54k8 _52jg _56bs _26vk _3lmf _3fyi _56bv _653w" aria-label="Đăng" name="submit" data-sigil="touchable composer-submit"><span class="_55sr">Đăng</span></button>
