class SignUpPage {
    getSignUpUsername()
    {
        return cy.get('input[type="text"]');
    }

    getSignUpEmail()
    {
        return cy.get('input[type="email"]');
    }

    getSignUpPassword()
    {
        return cy.get('input[type="password"]')
    }

    getSignUpButton()
    {
        return cy.get('button[type="submit"]');
    }

    getHaveAnAccountLink()
    {
        return cy.get('p.text-xs-center > a');
    }
}
export default SignUpPage;