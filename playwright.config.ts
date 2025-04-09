import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // workers: process.env.CI ? 2 : 1,
  
  testDir: "./tests",
  fullyParallel: true,
  reporter: [
    ["list"],
    ["html"],
    [
      "allure-playwright",
      {
        resultsDir: "./out/allure-results",
        detail: true,
        suiteTitle: true,
        // environmentInfo: {
        //   node_version: process.version,
        // },
      },
    ],
  ],
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    baseURL: "https://petstore.swagger.io/",
    headless: true,
    launchOptions: {
      args: ["--start-maximized"],
    },
    contextOptions: {
      ignoreHTTPSErrors: true,
    },
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Google Chrome",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
        deviceScaleFactor: undefined,
        viewport: null,
        launchOptions: {
          args: ["--start-maximized"],
        },
      },
    },

    // {
    //   name: "chromium",
    //   use: { ...devices["Desktop Chrome"] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'],
    //     deviceScaleFactor: undefined,
    //     viewport: null,
    //     launchOptions: {
    //       args: ["--start-maximized"],
    //     },
    //    },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
