const puppeteer = require("puppeteer");
const env = require("./config/env");
const {email, password} = env;


const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://m.facebook.com/", {
    waitUntil: "networkidle2",
  });
  await page.waitFor(1250);
  await page.type("#m_login_email", email);
  await page.waitFor(1000);
  await page.type("#m_login_password", password);
  await page.waitFor(500);
  await page.click("button[name='login']");
  await page.waitForNavigation({
    waitUntil: "networkidle2",
  });

  await page.click("._54k8._56bs._26vk._56b_._56bw._56bt");
  await page.waitForNavigation({
    waitUntil: "networkidle2",
  });
  // await page.evaluate(() => {
  // let list = document.querySelectorAll("._15ko._77li.touchable");
  // return list;
  // });
  // console.log(list);
  let cmt = await page.$x("//a[contains(text(), 'Comment')]");
  console.log(cmt);
  let list = await page.$x("//a[contains(text(), 'Like')]");
  for (var i=0; i<3; i++) {
    await list[i].click();
    await page.waitFor(500);
    await cmt[i+1].click();

    await page.waitForNavigation({
      waitUntil: "networkidle2",
    });
    await page.waitFor(5000);
    await page.click(".mentions");
    await page.type("input[name='comment_text']", "Like");
    await page.waitFor(2500);
    await page.click("button[name='submit']");
    await page.waitFor(800);
    await page.click("a[data-sigil='MBackNavBarClick']");
    // await writecmt.type("Like");
    // await page.waitFor(300);
    // await page.click("#u_0_e");
    await page.waitFor(3000);
  };

  // ("._15ko._77li.touchable")[0,1,2];
  // await page.waitFor(6000);
  // await page.click("._15ko._77li.touchable")[5];
  // await page.click("#u_ps_0_0_1y");
  // await page.waitForSelector()
  // await page.click("body");
  // await page.click(".rnr61an3");
  console.log("finis");

}

main();
