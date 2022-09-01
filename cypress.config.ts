import { defineConfig } from "cypress";

export default defineConfig({
  // General configuration
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: true,
  pageLoadTimeout: 20000,

  // Media configuration
  video: false,
  videosFolder: 'cypress/reports/videos',
  screenshotsFolder: 'cypress/reports/screenshots',
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,

  // Test execution configuration 
  retries: { "runMode": 2, "openMode": 0 },
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
