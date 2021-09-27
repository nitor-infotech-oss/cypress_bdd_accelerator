//including cypress as reference includes the intelligence for cypress in the file
/// <reference types= "cypress" />>
const {Then} = require("cypress-cucumber-preprocessor/steps");
import {userDashboardPage} from "../pageObjects/pageConsts";
const faker = require("faker");


const env = Cypress.env("run_env");
const url = Cypress.env(env).url;


When("I register User using Json", () => {
  cy.fixture(`${env}/signUpTestData.json`).then(function (jsonData) {
    cy.randomNumber(1, 10000).then(randomNumber=>{
      jsonData.username = jsonData.username + randomNumber;
      jsonData.email = jsonData.email +  randomNumber;
      cy.userRegister(jsonData);
    });
    cy.wrap(jsonData).as('currentUser');
  });
});

When("I register a user using csv", () => {
  cy.visit(url);
  cy.readCsv(`${env}/test1.csv`).then((csvData) => {
    cy.log(JSON.stringify(csvData));
    cy.randomNumber(1, 10000).then(randomNumber=>{
      csvData.username = csvData[0]["username"] + randomNumber;
      csvData.email = csvData[0]["email"].replace("1", randomNumber);
      csvData.password = csvData[0]["password"];
      cy.userRegister(csvData);
    });
    cy.wrap(csvData).as('currentUser');
  });
});

When("I register User using faker data", () => {
  const userData = {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  cy.userRegister(userData);
  cy.wrap(userData).as('currentUser');
});

Then("I can see the username displayed on header", function(){
  userDashboardPage.getLoggedInUsername().should("have.text", ` ${this.currentUser.username} `);
});

And("I sign in as a User", () => {
  cy.fixture(`${env}/signUpTestData.json`).then(function (jsonData) {
    cy.userLogin(jsonData.email, jsonData.password);
    cy.wrap(jsonData).as('currentUser');
  });
  
});


