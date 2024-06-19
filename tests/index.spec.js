// @ts-check
const { test, expect } = require('@playwright/test');

test('index shows title', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole("heading", { name: "Simple JS"})).toBeVisible()
});

test('index click shows clicked', async ({ page }) => {
  await page.goto('/');

  await page.getByRole("button").click()

  await expect(page.getByRole("paragraph")).toHaveText("Clicked!")
});
