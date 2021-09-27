//including cypress as reference includes the intelligence for cypress in the file
/// <reference types= "cypress" />>

const {
    Then ,
    When,
    defineStep  } = require("cypress-cucumber-preprocessor/steps"); 

When('I run validate list users api',function(){
    cy.request('GET','api/users?page=2').then(response => cy.wrap(response.body).as('usersList'))
    });

Then('I could validate the list of users retrieved',function(){
    expect(this.usersList.total).to.be.greaterThan(0);
    cy.log(JSON.stringify(this.usersList))
})

When('I run the create user api',() =>{
    const body = {
        "name": "morpheus",
        "job": "leader"
    }
    cy.request('POST','api/users',body).then(response=>{
        cy.wrap(response.body).as('singleUserCreated')
    })
});

Then('I validate the new user created using get api',function(){
    // cy.request(`api/users/${this.singleUserCreated.id}`).then(response=>{
    //     cy.log(JSON.stringify(response.body))
    // });
    cy.request(`api/users/2`).then(response=>{
        cy.log(JSON.stringify(response.body))
    });
});

When('I Login to the application using API',()=>{
    const body = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
    cy.request('POST',`api/login`,body).then(response=>{
        cy.log(response.body.token)
    });
});

defineStep('I update the user profile using API',()=>{
    const env = Cypress.env("run_env");
    cy.fixture(`${env}/userUpdate`).then(body=>{
        cy.request('PUT','api/users/2',body).then(response=>{
            cy.log(JSON.stringify(response.body))
        })
    })
});

When('I delete the user using API',()=>{
    cy.request('DELETE','api/users/2').then(response=>{
        cy.log(JSON.stringify(response))
    })
});
//code to add token as part of url
// const url = `url/?token=${token}`
// cy.request(`api/users/2`).then(response=>{
//     cy.log(JSON.stringify(response.body))
// });

// Way to add bearer token for the auth
// request.get({
    // 'url':'http://some.server.com/'
    // 'method':'POST',
//   'auth': {
//     'bearer': 'bearerToken'
//   },
// body: JSON.stringify(input),
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   }
// });

//request.get('http://some.server.com/').auth(null, null, true, 'bearerToken');