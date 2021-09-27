// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
import HomePage from "../support/pageObjects/HomePage";
import SignInPage from "../support/pageObjects/SignInPage";
import SignUpPage from "../support/pageObjects/SignUpPage";
import NewArticlePage from "../support/pageObjects/NewArticlePage";
let homePageObj = new HomePage();
let signUpObj = new SignUpPage();
let signInObj = new SignInPage();
let newArticlePage = new NewArticlePage();

// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("readCsv", (filepath) => {
  const fixturePath = "./cypress/fixtures/";
  filepath = fixturePath + filepath;
  let filedata = [];
  cy.readFile(filepath, "utf8").then((data) => {
    let readValues = data.split("\n");
    const header = readValues[0].split(",");
    readValues.forEach((val1, index, array) => {
      if (index > 0 && index < array.length - 1) {
        let jsonString = "{";
        let colvals = val1.split(",");
        colvals.forEach((val2, ind, arr) => {
          if (ind < arr.length - 1) {
            header[ind] = header[ind].trim();
            val2 = val2.trim();
            jsonString += `"${header[ind]}":"${val2}", `;
          } else {
            header[ind] = header[ind].trim();
            val2 = val2.trim();
            jsonString += `"${header[ind]}":"${val2}"`;
          }
        });
        jsonString += "}";
        let dataRow = JSON.parse(jsonString);
        filedata.push(dataRow);
      }
    });
  });
  // wrap function enables us to wrap the result of this function to the previous result from cypress function.
  cy.wrap(filedata);
});

Cypress.Commands.add("userRegister", userData => {
  homePageObj.getSignUpButton().click();
  signUpObj.getSignUpUsername().type(userData.username);
  signUpObj.getSignUpEmail().type(userData.email);
  signUpObj.getSignUpPassword().type(userData.password);
  signUpObj.getSignUpButton().click();
});

Cypress.Commands.add("userLogin", (email, password) => {
  homePageObj.getSignInButton().click();
  signInObj.getEmailAddress().type(email);
  signInObj.getPassword().type(password);
  signInObj.getSignInButton().click();
});

Cypress.Commands.add("postArticle",postData => {
    newArticlePage.getArticleTitleTextBox().type(postData.postTitle);
    newArticlePage.getArticledescriptionTextBox().type(postData.postDescription);
    newArticlePage.getArticleBodyTextBox().type(postData.postBody);
    newArticlePage.getEnterTagsTextBox().type(postData.postTags);
    newArticlePage.getPublishArticleButton().click();
  }
);

Cypress.Commands.add("randomNumber",(minNumber, maxNumber)=>{
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
})