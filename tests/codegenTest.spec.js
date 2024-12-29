import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('User1');
  await page.getByLabel('Username:').press('Tab');
  await page.getByLabel('Password:').fill('RadonUser1Password');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByLabel('Sign up').getByText('Close').click();
  await page.getByRole('link', { name: 'About us' }).click();
  await page.locator('#videoModal').getByText('Close', { exact: true }).click();
});