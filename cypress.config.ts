import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false,
  reporter: "mocha-junit-reporter",
  reporterOptions: {
    testsuitesTitle: true,
    mochaFile: "dist-tests/test-results/cypress/[hash].xml",
    outputs: true,
  },
  env: {
    oidcUrl: "https://sso.mastermindzh.tech/realms/public-tests/protocol/openid-connect/token",
    oidcClientId: "demo",
    oidcClientSecret: "lhlPHFUd3fC1Ky0Uwyb2ssC0XiAFeGGF",
    oidcGrantType: "client_credentials",
    oidcScope: "openid profile email",
    oidcToken: "",
    oidcCallbackUrl: "http://localhost:3000/authentication/callback",
  },
});
