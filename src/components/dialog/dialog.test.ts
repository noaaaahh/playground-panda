// import { test, expect } from "@playwright/test";

// test("dialog", async ({ page }, workerInfo) => {
//   // await page.goto("http://localhost:6006");
//   // await expect(page).toHaveScreenshot("homepage.png");

//   const params = new URLSearchParams({
//     id: "dialog--visual-regression",
//     viewMode: "story",
//   });

//   await page.goto(`http://localhost:6006/iframe.html?${params.toString()}`);
//   await page.waitForSelector("#storybook-root");
//   await page.waitForLoadState("networkidle");

//   await expect(page).toHaveScreenshot(
//     `dialog--visual-regression-${workerInfo.project.name}-${process.platform}.png`,
//     { fullPage: true, animations: "disabled" }
//   );
// });
