const {Then} = require("cypress-cucumber-preprocessor/steps");
import {userDashboardPage, newArticlePage} from "../pageObjects/pageConsts"

const env = Cypress.env("run_env");

Then("I create a post using csv data", () => {
    userDashboardPage.getNewPostLink().click();
    cy.readCsv(`${env}/post.csv`).then((csvPostData) => {
      cy.randomNumber(1,1000).then(randomNumber =>{
        csvPostData.postTitle = csvPostData[0]["postTitle"] + randomNumber;
        csvPostData.postDescription = csvPostData[0]["postDescription"] + randomNumber;
        csvPostData.postBody = csvPostData[0]["postBody"] + randomNumber;
        csvPostData.postTags = csvPostData[0]["postTags"] + randomNumber;
        cy.postArticle(csvPostData);
      })
    });
    newArticlePage.getDeleteArticleButton().click();
    userDashboardPage.getSettingsLink().click();
    userDashboardPage.getLogoutLink().click();
  });
  