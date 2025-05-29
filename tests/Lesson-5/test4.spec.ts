import { test } from "@playwright/test";

const dataVNExpress: {title: string; content:string}[] = []

test("Personal notes", async ({ page }) => {
  await test.step("Get data from VNExpress", async () => {
    await page.goto("https://vnexpress.net/", {
      waitUntil: "domcontentloaded",
    });
    const titleArticles = await page
      .locator("//h3[@class='title-news']/a")
      .allTextContents();
    const contentArticles = await page
      .locator("//p[@class='description']/a")
      .allTextContents();
    for (let i = 0; i < 10; i++) {
      dataVNExpress.push({
        title: titleArticles[i],
        content: contentArticles[i],
      });
    }
    console.log("dataVNExpress: ", dataVNExpress);
  });
  // await test.step("Navigate to Personal Notes Page", async () => {
  //   await page.goto("https://material.playwrightvn.com/");
  //   await page
  //     .locator("//a[contains(text(),'Bài học 4: Personal notes')]")
  //     .click();
  // });
});
