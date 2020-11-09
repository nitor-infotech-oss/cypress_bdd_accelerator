Feature: homePage
    Validate home page

  Scenario: Validating first page
    Given I open application
    When I Select test from tags
    Then I should be able to see comments with test
    And I see "Conduit" in the title
