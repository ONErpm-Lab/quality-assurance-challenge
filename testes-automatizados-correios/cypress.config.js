const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
    specPattern: "cypress/scenarios/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://viacep.com.br",
    video: true,
  },
  
});
