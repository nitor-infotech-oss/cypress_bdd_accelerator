Feature: Api calls validation

    Scenario: Validate update user API  
        When I update the user profile using API

    Scenario: Validate user creation API 
        When I Login to the application using API
        When I run the create user api
        Then I validate the new user created using get api