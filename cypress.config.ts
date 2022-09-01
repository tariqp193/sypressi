import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 1080, 
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
