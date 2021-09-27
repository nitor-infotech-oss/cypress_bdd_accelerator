Feature: signUpAndSignIn
    To validate that the user is able to sign up and then sign in with email id and password

  Scenario: Validate user is able to sign up in the application
    Given I open application
    When I register User using faker data
    Then I can see the username displayed on header

  Scenario: Validate user is able to sign in the application with user created earlier
    When I open application
    And I sign in as a User
    Then I can see the username displayed on header

  Scenario: Validate user is able to sign up using Json 
    Given I open application
    When I register User using Json
    Then I can see the username displayed on header