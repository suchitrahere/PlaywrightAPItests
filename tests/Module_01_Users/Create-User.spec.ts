import { test, expect } from '@playwright/test';
import CreateUserPayload from './Payload_data/Create-User-payload';
import { jsonToFormData } from '../Utility/jsonToFormData';

test('Create-User', async ({ page }) => {
  const response = await page.request.post('/api/v1/users', {
    multipart: jsonToFormData(CreateUserPayload)
  });
  await expect(response).toBeOK();

  const body = await response.json();
  // console.log('Response body:', body);

  expect(Array.isArray(body)).toBe(true);
});