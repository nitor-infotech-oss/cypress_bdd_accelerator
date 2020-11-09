//including cypress as reference includes the intelligence for cypress in the file
/// <reference types= "cypress" />>
import HomePage from '../../../support/pageObjects/HomePage'
const {
    Before,
    After,
    Given,
    Then ,
    When,
    defineStep,
    And
  } = require("cypress-cucumber-preprocessor/steps"); 

  let env, url,fileData,homePageObj;
  //code to be executed before the test case in the suite
  //setting environment variables, url and reading file data before actual execution.
  Before(() => {
    env = Cypress.env('env');
    url = Cypress.env(env).url
    cy.log(`env is ${env}`)
    let filepath = `${env}/test1.csv` 
    cy.readCsv(filepath).then(data=>{
      fileData = data});
      homePageObj = new HomePage();
  });
  
  defineStep('I open application',()=>{
    cy.visit(url)
  })

  When('I Select test from tags',()=>{
    homePageObj.getLogo().should('have.text','conduit')
    homePageObj.getTags().each((el,index)=>{
        if(el.text().match('test'))
        {
          homePageObj.getTags().eq(index).click();
        }
    })
  })

  Then('I should be able to see comments with test',()=>{
    
    homePageObj.getSignInButton().click();
    homePageObj.getSignUpButton().click();
    homePageObj.getHomeButton().click();
  })