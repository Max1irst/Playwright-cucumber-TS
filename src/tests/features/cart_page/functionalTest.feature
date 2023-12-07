Feature: Functional Tests for Cart page

  Background: Open main page
    Given User navigates to 'sweet shop app'

  Scenario: : Add products to cart and check cart functional
    Then User add product 'Milk Tops 100g' to cart
    And Get success toast message that 'Milk Tops 100g added to cart'
    And User add product 'Milk Tops 100g' to cart
    And Get info toast message that 'Increased Milk Tops 100g cart quantity'
    And User add product 'Vimto Lollipop' to cart
    And Get success toast message that 'Vimto Lollipop added to cart'
    And User add product 'Jarnormous Pick 2.5kg' to cart
    And Get success toast message that 'Jarnormous Pick 2.5kg added to cart'
    And User add product 'Sherbet Carrots 8 Pack' to cart
    And Get success toast message that 'Sherbet Carrots 8 Pack added to cart'
    Then User open 'cart' page
    And Cart items in cart should be 4 and total sum equal '125'
    When User remove product 'Sherbet Carrots 8 Pack' from the cart
    And Get error toast message that 'Sherbet Carrots 8 Pack removed from Cart'
    Then Cart items in cart should be 3 and total sum equal '50'
    And User click on 'clear cart' button on cart page
    And Get info toast message that 'Card is cleared'
    Then User see that cart is empty

