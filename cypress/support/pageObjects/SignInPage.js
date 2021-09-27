class SignInPage {
  getEmailAddress() {
    return cy.get('input[placeholder="Email"]');
  }

  getPassword() {
    return cy.get('input[placeholder="Password"]');
  }

  getSignInButton() {
    return cy.get('button[type="submit"]');
  }

  getNeedAnAccountLink() {
    return cy.get("p.text-xs-center > a");
  }
}
export default SignInPage;
