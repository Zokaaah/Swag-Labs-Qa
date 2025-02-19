const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      on('after:spec', (spec, results) => {
        console.log(`Execução concluída para ${spec.relative}:`);
        results.tests.forEach((test) => {
          console.log(`- Teste: ${test.title} - Estado: ${test.state}`);
        });
      });
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true, 
      reportDir: 'cypress/reports', 
      reportFilename: '[status]_[datetime]-[name]', 
      embeddedScreenshots: true, 
      inlineAssets: true, 
    },
    screenshotOnRunFailure: true, 
  },
});