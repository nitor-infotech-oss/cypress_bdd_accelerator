class HomePage {
  getLogo = () => cy.get("h1.logo-font");

  getHomeButton = () => cy.get(".navbar-nav li a").eq(0);

  getSignInButton = () => cy.get('a[href="/login"]');

  getSignUpButton = () => cy.get(".navbar-nav li a").eq(2);

  getTags = () => cy.get("div a.tag-default.tag-pill");

  getActiveTags = () => cy.get(".nav-link.active");

  getGlobalFeedButton = () => cy.contains("Global Feed");
}

export default HomePage;
