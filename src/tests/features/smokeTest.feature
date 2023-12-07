Feature: Smoke tests

  Scenario: Check is content visible on main page
    Given User navigates to 'sweet shop app'
    And User checks that main elements visible on main page
    Then User checks that the navbar links work correctly and main content visible on all pages
    When User open 'cart' page
    Then User see that cart is empty
    And User click on 'start shopping' button on cart page
    Then User see that url is 'https://max1irst.github.io/sweet-shop-app-react/#/sweet-shop-app'
