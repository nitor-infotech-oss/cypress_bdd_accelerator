## Cypress Accelerator with BDD

<br />

## Key Points of this Solution:


> - ### Page Object Model(POM) support
> - ### Behaviour Driven Development(BDD) support for writing test cases
>- ###  Integration with Cucumberio(formely Hiptest)
>- ###   HTML Reports
>- ### Environment vise data parameterization using json and csv files
>- ### Implementation of common utilities for data parser and date parser
>- ### Adding user defined functions as Cypress common functions
>- ### Cross Browser testing support
>- ### Command line parameter support
 
<br />

## Getting started

You can view a live demo of application under test at https://react-redux.realworld.io/

### Prerequisite:
1. NodeJs should be installed on a machine.
2. install ruby 2.6.6-1(X64) from https://rubyinstaller.org/downloads/
3. install dependency(MSYs2), if not installed during RUBY installation, run below command:
  1. ridk install
4. install nokogiri
  1. gem install nokogiri
5. install hiptest-publisher
  1. gem install hiptest-publisher

### To execute the automation suite:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm run getFeatureFiles --test-run-id=407464` to pull the feature files from HipTest/CucumberStudio (Replace 402901 with run id)
- `npm run testE2E -- --env env='qa' --headed --browser chrome` (to run the cypress test using command line, here headed implies that we need to run test cases in Headed mode, and we can pass ie/edge/electorn/firefox to run test cases on different browsers)
- `npm run generateHTMLReport` to generate BDD reports

### To open cypress runner:
- `npm run openCypress -- --env env='<run_env>'`

### Test data passing to test cases:

- Test data to the test cases is passed using .json and csv files and they are present under the fixtures folder
- As per the Environment value (qa/dev) passed while running the cypress tests, the test data files are used by the code.
- Baseurl/url in the current solution is passed using the cypress.json
- Feature files are present under integration\featureFiles folder.
- Step definition files are present under integration\stepdefinition folder.

### Folder Structure:
- Fixtures: Uses to put test data in “.json” format
- Integration: Uses to write all our testcases 
- Plugins: These are the cypress listener; and cypress events after and before 
- Support: Uses to write all reusable methods. Here we can add page object models as well
- cypress.json: Uses to overwrite all default cypress configuration
- package.json: uses to add any dependency which are required

### Cypress Overview
- Cypress is a JS based UI automation tool which allows user to automate application effectively and easily.
- Cypress is very fast as compared to other tools as it runs within a browser.
- The component currently has capability to create good HTML reports.
- Cypress also have capability to capture screenshot and videos automatically.
- Code coverage with Cypress for angular application is also implemented, which helps to generate a report showing how much code coverage does Cypress tests are covering.
