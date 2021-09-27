export default class NewArticlePage {
  getArticleTitleTextBox = () => cy.get('input[placeholder="Article Title"]');
  

  getArticledescriptionTextBox = () => cy.get('input[formcontrolname="description"]');
  

  getArticleBodyTextBox = () => cy.get('textarea[formcontrolname="body"]');
  

  getEnterTagsTextBox = () => cy.get('input[placeholder="Enter tags"]');
  

  getPublishArticleButton = () => cy.contains(" Publish Article ");
  

  getDeleteArticleButton = () => cy.contains(" Delete Article ");
  
}
