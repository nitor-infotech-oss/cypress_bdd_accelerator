class UserDashboardPage {

    getLoggedInUsername()
    {
        return cy.get(':nth-child(4) > .nav-link');
    }

    getNewPostLink()
    {
        return cy.get('a[href="/editor"]');
    }

    getYourFeedLink()
    {
        return cy.get('.feed-toggle > .nav > :nth-child(1) > .nav-link');
    }

    getGlobalFeedLink()
    {
        return cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link');
    }

    getPopulatTagsSidebar()
    {
        return cy.get('.sidebar');
    }


}
export default UserDashboardPage;