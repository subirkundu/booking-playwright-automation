import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 70 * 1000, // Global timeout for each test (60s)
  expect: {
    timeout: 70 * 1000,  // Timeout for assertions (60s)
  },

  reporter: [
    ['html'],
    ['allure-playwright']
],

  use: {
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    viewport: { width: 1920, height: 1080 },
  },

  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

  ],
});

// import { defineConfig, devices } from '@playwright/test';
// export default defineConfig({
//   testDir: './tests',
//   timeout: 60 * 1000, // Global timeout for each test (40s)
//   expect: { timeout: 60 * 1000 }, // Timeout for assertions (40s)

//   reporter: 'html',

//     use: {
//     browserName: 'firefox',
//     headless: false, 
//     screenshot: 'only-on-failure',
//     trace: 'on-first-retry',
//     viewport: { width: 1920, height: 1080 },
//   },
// });