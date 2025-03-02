import { test, expect } from "@playwright/test";

test("component", async ({ page }, workerInfo) => {
  const params = new URLSearchParams({
    id: "component--visual-regression",
    viewMode: "story",
  });
  await page.goto(`http://localhost:6006/iframe.html?${params.toString()}`);
  await page.waitForSelector("#storybook-root");
  await page.waitForLoadState("networkidle");

  await expect(page).toHaveScreenshot(
    `component--visual-regression-${workerInfo.project.name}.png`,
    { fullPage: true, animations: "disabled" }
  );
});
