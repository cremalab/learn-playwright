/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from "@playwright/test";

test.use({
  viewport: { height: 400, width: 600 },
});

test("Has initial todos", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveTitle(/Todo App/);
  await expect(page.getByText("Get some eggs")).toBeVisible();
  await expect(page.getByText("Mow lawn")).toBeVisible();
  await expect(page.getByText("Buy gift")).toBeVisible();
});

test("Adds todos", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const newItems = ["Buy milk", "Eat cookies", "Drink milk"];
  const input = page.getByPlaceholder("New Todo...");
  const submit = page.getByRole("button", { name: "Add" });

  for (const newItem of newItems) {
    await input.fill(newItem);
    await submit.click();
    const result = page.getByText(newItem);
    await expect(result).toBeVisible();
  }
});

// TODO - Write test for deleting todos
