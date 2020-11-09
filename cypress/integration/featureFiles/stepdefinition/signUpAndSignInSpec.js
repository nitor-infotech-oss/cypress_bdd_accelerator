//including cypress as reference includes the intelligence for cypress in the file
/// <reference types= "cypress" />>

import HomePage from '../../../support/pageObjects/HomePage'
import SignInPage from '../../../support/pageObjects/SignInPage'
import UserDashboardPage from '../../../support/pageObjects/UserDashboardPage'
import SignUpPage from '../../../support/pageObjects/SignUpPage'
import Reusable from "../../../support/reusable.js";

let reusable = new Reusable();

const {
    Before,
    After,
    Given,
    Then,
    When,
    defineStep,
    And
} = require("cypress-cucumber-preprocessor/steps");

let env, fileData, randomNumber, homePageObj, signUpObj,signInObj,userDashboardObj;
before(() => {
    env = Cypress.env('env');
    cy.log(`env is ${env}`)
    let filepath = `${env}/signUpTestData.json`
    randomNumber = reusable.getRandomNumber(1, 10000);
    cy.fixture(filepath).then(function (data) {
        fileData = data;
    });
    homePageObj = new HomePage();
    signUpObj = new SignUpPage();
    signInObj = new SignInPage();
    userDashboardObj = new UserDashboardPage();
})


When('I register as a User', () => {
    homePageObj.getSignUpButton().click();
    fileData.signUpUsername = fileData.signUpUsername + randomNumber;
    fileData.signUpEmail = fileData.signUpEmail.replace('1', randomNumber);
    signUpObj.getSignUpUsername().type(fileData.signUpUsername);
    signUpObj.getSignUpEmail().type(fileData.signUpEmail);
    signUpObj.getSignUpPassword().type(fileData.signUpPassword);
    signUpObj.getSignUpButton().click(); 
})

And('I sign in as a User', () => {
    homePageObj.getSignInButton().click();
    signInObj.getEmailAddress().type(fileData.signUpEmail);
    signInObj.getPassword().type(fileData.signUpPassword);
    signInObj.getSignInButton().click();
})

Then('I can see the username displayed on header', () => {
    userDashboardObj.getLoggedInUsername().should('have.text', fileData.signUpUsername)

})