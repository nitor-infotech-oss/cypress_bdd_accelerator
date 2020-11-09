class SignInPage {
    getEmailAddress()
    {
        return cy.get('input[type="email"]');
    }

    getPassword()
    {
        return cy.get('input[type="password"]');
    }

    getSignInButton()
    {
        return cy.get('button[type="submit"]');
    }

    getNeedAnAccountLink()
    {
        return cy.get('p.text-xs-center > a');
    }
}
export default SignInPage;