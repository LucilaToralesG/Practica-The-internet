const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:5000,
  viewportWidth: 1280,
  viewportHeight: 551,
  e2e: {
    "baseUrl": "https://the-internet.herokuapp.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
