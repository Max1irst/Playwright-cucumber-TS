Feature: Smoke test for Products page

  Background: Open products page
    Given User navigates to sweet shop app

  Scenario: Check is content visible on products page
  Then User checks that main elements visible on Products page
  Then User checks that the navbar links work correctly on Products page