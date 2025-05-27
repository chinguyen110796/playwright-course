import { test } from "@playwright/test";

test("Register Page", async ({ page }) => {
  await test.step("Navigate to Register Page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
});
