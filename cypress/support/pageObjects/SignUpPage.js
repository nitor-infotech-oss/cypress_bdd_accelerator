class SignUpPage {
  getSignUpUsername() {
    return cy.get('input[placeholder="Username"]');
  }

  getSignUpEmail() {
    return cy.get('input[placeholder="Email"]');
  }

  getSignUpPassword() {
    return cy.get('input[placeholder="Password"]');
  }

  getSignUpButton() {
    return cy.get('button[type="submit"]');
  }

  getHaveAnAccountLink() {
    return cy.get("p.text-xs-center > a");
  }
}
export default SignUpPage;
