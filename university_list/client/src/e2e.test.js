import puppeteer from "puppeteer";
import "expect-puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("http://localhost:3000");
  });

  it("should login", async () => {
    await page.waitForSelector("input[placeHolder=Username]");
    await page.$eval(
      "input[placeHolder=Username]",
      (el) => (el.value = "sunny")
    );

    await page.waitForSelector("input[placeHolder=Password]");
    await page.$eval(
      "input[placeHolder=Password]",
      (el) => (el.value = "pass")
    );

    await page.click("button");

    await page.waitForFunction(
      // eslint-disable-next-line max-len
      'document.querySelector("body").innerText.includes("Marywood University")'
    );
  });

  afterAll(() => browser.close());
});
