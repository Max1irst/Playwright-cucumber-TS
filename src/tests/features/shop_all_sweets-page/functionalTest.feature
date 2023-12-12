Feature: Functional Tests for Shop all sweets page

  Background: Open Shop all sweets page
    Given User navigates to 'sweet shop app'
    Then User open 'shop_all_sweets' page

  @functional
  Scenario: Check is user able to add to and delete product from cart
    Given User get quantity of items in cart from counter above cart icon in navbar
    When User add product 'Milk Tops 100g' to cart
    And Get success toast message that 'Milk Tops 100g added to cart'
    And User add product 'Milk Tops 100g' to cart
    And Get info toast message that 'Increased Milk Tops 100g cart quantity'
    And User add product 'Vimto Lollipop' to cart
    And Get success toast message that 'Vimto Lollipop added to cart'
    Then Cart items counter increased for 3
    When User open 'cart' page
    Then Cart items in cart should be 2 and total sum equal '39'