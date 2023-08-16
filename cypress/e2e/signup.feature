Feature: Myer Signup functionality

  Background: empty Myer sign-up website
    Given user navigates to the Myer sign-up website

  Scenario: User creates a Myer account without Myer one member card
    When user enters a valid email address
      And user clicks on the Join button
      And user enters valid personal data
      And user enters date of birth
      And user clicks on the Create Account button
    Then user should be redirected to the account page

  Scenario: User create a Myer account however the account exists
    When user enters a valid email address
      And user clicks on the Join button
      And user enters valid personal data
      And user enters date of birth
      And user clicks on the Create Account button
    Then a text message of "You already have an account" will be shown

  Scenario: User create a Myer account entered invalid email
    When user enters an invalid email address
      And user clicks on the Join button
    Then a text message of "Please enter a valid email" will be shown

  Scenario: User create a Myer account entered invalid password
    When user enters a valid email address
      And user clicks on the Join button
      And user enters invalid password
      And user clicks on another input box
    Then a text message of "Please enter a valid password" will be shown

  Scenario: User create a Myer account entered invalid firstname
    When user enters a valid email address
      And user clicks on the Join button
      And user enters an invalid First Name
      And user clicks on another input box
    Then a text message of "Please enter a valid name" will be shown

  Scenario: User create a Myer account entered invalid lastname
    When user enters a valid email address
      And user clicks on the Join button
      And user enters an invalid Last Name
      And user clicks on another input box
    Then a text message of "Please enter a valid name" will be shown

  Scenario: User create a Myer account entered invalid phone number
    When user enters a valid email address
      And user clicks on the Join button
      And user enters an invalid Australian mobile phone number
      And user clicks on another input box
    Then a text message of "Please enter a valid Australian mobile phone number" will be shown
  
  Scenario: User create a Myer account entered invalid date of birth
    When user enters a valid email address
      And user clicks on the Join button
      And user enters invalid date of birth
      And user clicks on another input box
    Then a text message of "Please enter a valid birthday" will be shown

  Scenario: User create a Myer account entered valid address manually
    When user enters a valid email address
      And user clicks on the Join button
      And user could not find entered address
      And user clicks on the Enter Address Manually button
    Then user enters valid address information manually

  Scenario: User create a Myer account entered address manually with invalid address line 1
    When user enters a valid email address
      And user clicks on the Join button
      And user could not find entered address
      And user clicks on the Enter Address Manually button
      And user enters an invalid address line 1
      And user clicks on another input box
    Then a text message of "Please enter a valid address line" will be shown

  Scenario: User create a Myer account entered address manually with invalid address line 2
    When user enters a valid email address
      And user clicks on the Join button
      And user could not find entered address
      And user clicks on the Enter Address Manually button
      And user enters an invalid address line 2
      And user clicks on another input box
    Then a text message of "Please enter a valid address line" will be shown

# Suburb name should not allow special characters, punctuations or numbers. However, this restriction is not enforced on the Myer website. 
  Scenario: User create a Myer account entered address manually with invalid suburb name
    When user enters a valid email address
      And user clicks on the Join button
      And user could not find entered address
      And user clicks on the Enter Address Manually button
      And user enters an invalid suburb name
      And user clicks on another input box
    Then a text message of "Please enter a valid suburb" will be shown

  Scenario: User create a Myer account entered address manually with invalid postcode
    When user enters a valid email address
      And user clicks on the Join button
      And user could not find entered address
      And user clicks on the Enter Address Manually button
      And user enters an invalid postcode
      And user clicks on another input box
    Then a text message of "Please enter a valid postcode" will be shown

# This sceniario should be redirect to the account page. But this membership number already have account.
  Scenario: Create Myer online account with a valid Myer one membership number
    When user click the create account button
      And user enters a valid email address
      And user enters valid personal data
      And click the find card button
      And user enter valid membership number
      And user clicks on another input box
    Then a text message of "Your MYER one Number was added successfully" will be shown
      # And user should be redirected to the account page
    

  Scenario: Create Myer online account with Myer one member card but can't find the membership number
    When user click the create account button
      And user enters a valid email address
      And user enters valid personal data
      And click the find card button
      And user enter invalid membership number
      And user clicks on another input box
   Then a text message of "This MYER one membership number wasn't found." will be shown


  