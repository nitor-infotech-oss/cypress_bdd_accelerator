//including cypress as reference includes the intelligence for cypress in the file
/// <reference types= "cypress" />>
import {homePage} from "../pageObjects/pageConsts";
const {
  Then,
  When,
  defineStep,
  And,
} = require("cypress-cucumber-preprocessor/steps");

//code to be executed before the test case in the suite
//setting environment variables, url and reading file data before actual execution.
const env = Cypress.env("run_env");
const url = Cypress.env(env).url;

defineStep("I open application", () => {
  cy.visit(url);
  cy.wait(5000);
});

When("I Select {string} from tags", (tagName) => {
  homePage.getLogo().should("have.text", "conduit");
  homePage.getTags().each((el, index) => {
    if (el.text().match(tagName)) {
      homePage.getTags().eq(index).click();
    }
  });
});

Then("I should not see {string} in the title",function(title){
  cy.title().should('not.include', title)
});

Then("I should be able to see comments with {string}", (tagName) => {
  homePage.getActiveTags().contains(tagName);
});

Then("I Validate comments as per tags selected", function (dataTable) {
  const table = dataTable.hashes();
  homePage.getLogo().should("have.text", "conduit");
  table.forEach((row) => {
    homePage.getTags().each((el, index) => {
      if (el.text().match(row.tags)) {
        homePage.getTags().eq(index).click();
        homePage.getActiveTags().then(element =>{
          expect(element.text()).to.contain(row.tags);
        });
      }
    });
  });
});

And("I am able to navigate back to Global Feed", () => {
  homePage.getGlobalFeedButton().click();
  homePage.getActiveTags().then(element =>{
    expect(element.text()).to.contain("Global Feed");
  });
});
