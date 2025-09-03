import { test as setup } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../.auth/user.json');

setup('Login with valid credentials', async ({ request }) => {
  // Optional: fast fail if envs are missing
  if (!process.env.USERNAME || !process.env.PASSWORD) {
    throw new Error('Set USERNAME and PASSWORD in .env');
  }

  const res = await request.post('/v1/authenticate/signIn', {
    data: { username: process.env.USERNAME, password: process.env.PASSWORD },
  });

  await request.storageState({ path: authFile });
});
