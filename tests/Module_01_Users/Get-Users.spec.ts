import { test, expect } from '@playwright/test';
import UserInfo from '../../.auth/user.json'

test('Get Users', async ({ page }) => {
  const response = await page.request.get('/v1/users?page=1&limit=5');
  await expect(response).toBeOK();

  const body = await response.json();
   console.log('Response body:', body); 

  expect(Array.isArray(body)).toBe(true);
});