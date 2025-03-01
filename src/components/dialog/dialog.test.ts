import { test, expect } from "@playwright/test";

import storybook from "../../../storybook-static/index.json" with { type: "json" };

const story = Object.values(storybook.entries).find(
  (e) => e.id === "dialog--visual-regression"
);

test("dialog", async ({ page }, workerInfo) => {
  if (story) {
    const params = new URLSearchParams({
      id: story.id,
      viewMode: "story",
    });

    await page.goto(`/iframe.html?${params.toString()}`);
    await page.waitForSelector("#storybook-root");
    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot(
      `${story.id}-${workerInfo.project.name}-${process.platform}.png`,
      { fullPage: true, animations: "disabled" }
    );
  }
});

// const params = new URLSearchParams({
//   id: "dialog--visual-regression",
//   viewMode: "story",
// });

// await page.goto(`http://localhost:6006/iframe.html?${params.toString()}`);
// await page.waitForSelector("#storybook-root");
// await page.waitForLoadState("networkidle");

// await expect(page).toHaveScreenshot(
//   `dialog--visual-regression-${workerInfo.project.name}-${process.platform}.png`,
//   { fullPage: true, animations: "disabled" }
// );
