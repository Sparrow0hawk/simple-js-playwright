// @ts-check
const { test, expect } = require('@playwright/test');

test('index shows title', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole("heading", { name: "Simple JS"})).toBeVisible()
});
