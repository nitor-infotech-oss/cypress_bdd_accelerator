**This document provides step to setup Cypress and BDD in any new project**

## 1. Initialize Cypress:
    1. npm install --save-dev cypress
    2. run command ./node_modules/.bin/cypress open
       1. This will initialize the folder structure and sample tests

## 2. BDD setup for cypress:
    1. npm install --save-dev cypress-cucumber-preprocessor 
    3. Add below command to cypress\plugins\index.js
       1. const cucumber = require('cypress-cucumber-preprocessor').default
       2. module.exports = (on, config) => {
        on('file:preprocessor', cucumber())
        }
    4. Add below command to cypress.json
       1. "testFiles": "**/*.{feature,features}",
            "ignoreTestFiles": "*.js"
    5. Add below code to package.json
       1.  "cypress-cucumber-preprocessor": {
            "nonGlobalStepDefinitions": false,
            "step_definitions": "cypress/integration/featureFiles/stepdefinition/",
            "commonPath": "cypress/integration/featureFiles/stepdefinition/common/",
            "cucumberJson": {
                "generate": true,
                "outputFolder": "./cypress/results/cucumber-json",
                "filePrefix": "",
                "fileSuffix": ".cucumber"
                }
    6. Reference link : https://www.npmjs.com/package/cypress-cucumber-preprocessor

## 3. Configure Cucumber html reporting:
    1. npm install --save-dev cucumber-html-reporter
    2. Add a index.js file
    3. Run command 
       1. node index.js
    4. Reference link : https://www.npmjs.com/package/cucumber-html-reporter

## 4. Steps to configure Hiptest/Cucumber studio
   1. install ruby 2.6.6-1(X64) from https://rubyinstaller.org/downloads/
   2. install dependency(MSYs2), if not installed during RUBY installation, run below command:
      1. ridk install
   3. install nokogiri
      1. gem install nokogiri
   4. install hiptest-publisher
      1. gem install hiptest-publisher
   5. Add hiptest-publisher.conf file