var reporter = require('cucumber-html-reporter');

var options = {
    //Available: ['bootstrap', 'hierarchy', 'foundation', 'simple']
        theme: 'bootstrap',
        jsonDir: 'cypress/results/cucumber-json',
        output: 'cypress/results/cucumber-json/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);