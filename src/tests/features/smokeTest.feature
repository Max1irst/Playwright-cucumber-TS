Feature: Smoke tests

  Scenario: Check is content visible on main page
    Given User navigates to 'sweet shop app'
    And User checks that main elements visible on main page
    Then User checks that the navbar links work correctly and main content visible on all pages
