Feature: homePage
    Validate home page

  Scenario: Validating first page
    Given I open application
    When I Select "angularjs" from tags
    Then I should be able to see comments with "angularjs"
    And I see "Conduit" in the title

  Scenario: Validating first page negative 
    Given I open application
    Then I should not see "Invalid" in the title

  Scenario: Validate user is able to navigate back to global feed after applying tags 
    Given I open application
    Then I Validate comments as per tags selected
    |tags|
    |angularjs|
    |welcome|
    And I am able to navigate back to Global Feed
  
  Scenario: Validate updated comments on selecting tags from right pane 
    Given I open application
    Then I Validate comments as per tags selected
    |tags|
    |string|
    |introduction|
    |welcome|