import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
});

test('home page has expected span', async ({ page }) => {
	await page.goto('/');
	await expect(
		page.getByText('Extract highlighted notes from your PDFs in seconds', { exact: true })
	).toBeVisible();
});
test('upload page button', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Upload PDF' }).click();

	// Expects page to have a heading with the name of Installation.
	await expect(page.getByRole('heading', { name: 'Upload PDF files' })).toBeVisible();
});
// test.describe('homepage accesibility', () => {
// 	test('should not have any automatically detectable accessibility issues', async ({ page }) => {
// 		await page.goto('/');

// 		const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
// 		expect(accessibilityScanResults.violations).toEqual([]);
// 	});
// });
