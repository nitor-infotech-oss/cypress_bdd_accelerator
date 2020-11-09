class HomePage {

    getLogo(){
        return cy.get('.logo-font');
    }

    getHomeButton()
    {
        return cy.get(".navbar-nav li a").eq(0);
    }

    getSignInButton()
    {
        return cy.get('a[href="/login"]');
    }

    getSignUpButton()
    {
        return cy.get(".navbar-nav li a").eq(2);
    }
    
    getTags()
    {
        return cy.get('div a.tag-default.tag-pill')
    }
}

export default HomePage;