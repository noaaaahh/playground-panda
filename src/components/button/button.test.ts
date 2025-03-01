import { test, expect } from "@playwright/test";

test("button", async ({ page }, workerInfo) => {
  const params = new URLSearchParams({
    id: "button--visual-regression",
    viewMode: "story",
  });

  await page.goto(`/iframe.html?${params.toString()}`);
  await page.waitForSelector("#storybook-root");
  await page.waitForLoadState("networkidle");

  await expect(page).toHaveScreenshot(
    `button--visual-regression-${workerInfo.project.name}.png`,
    { fullPage: true, animations: "disabled" }
  );
});

/************************************************************************************
 *
 ************************************************************************************/

// import { test, expect } from "@playwright/test";

// test("Button", async ({ page }, workerInfo) => {
//   const params = new URLSearchParams({
//     id: "button--visual-regression",
//     viewMode: "story",
//   });

//   await page.goto(`http://localhost:9009/iframe.html?${params.toString()}`);
//   await page.waitForSelector("#storybook-root");
//   await page.waitForLoadState("networkidle");

//   await expect(page).toHaveScreenshot(
//     `button--visual-regression-${workerInfo.project.name}-${process.platform}.png`,
//     { fullPage: true, animations: "disabled" }
//   );
// });
