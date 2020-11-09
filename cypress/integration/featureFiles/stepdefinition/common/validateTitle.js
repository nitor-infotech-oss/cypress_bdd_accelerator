import { defineStep } from "cypress-cucumber-preprocessor/steps";
 
defineStep(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})