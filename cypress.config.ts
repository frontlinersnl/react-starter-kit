import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    appBaseUrl: "http://localhost:3000",
  },
  video: false,
  reporter: "mocha-junit-reporter",
  reporterOptions: {
    testsuitesTitle: true,
    mochaFile: "dist-tests/test-results/cypress/[hash].xml",
    outputs: true,
  },
});
