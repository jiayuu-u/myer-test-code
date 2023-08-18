Feature: Myer Signup functionality

  Background: empty Myer sign-up website
    Given user visits the signup page

  Scenario: User create account
    When user enters a valid email address
      And user clicks on the join button
      And user enters valid details for signup form
      And user enters valid address
      And the user submits the signup form
    Then user should be redirected to the account page
      And the message "Congratulations, your account has been created and your MYER one number has been added" should be shown

  Scenario: User create account and chose to enter the address manually
    When user enters a valid email address
      And user clicks on the join button
      And user enters valid details for signup form
      And user could not find entered address
      And user clicks on the Enter Address Manually button
      And user enters valid address information manually
      And the user submits the signup form
    Then user should be redirected to the account page
      And the message "Congratulations, your account has been created and your MYER one number has been added" should be shown

  Scenario: User create account through the Create Account option
    When user clicks on the create account button
      And user enters a valid email address
      And user enters valid details for signup form
      And user enters valid address
      And the user submits the signup form
    Then user should be redirected to the account page
      And the message "Your account is now active" should be shown

  Scenario: User create account through the Create Account option and enter address manually
    When user clicks on the create account button
      And user enters a valid email address
      And user enters valid details for signup form
      And user could not find entered address
      And user clicks on the Enter Address Manually button
      And user enters valid address information manually
      And the user submits the signup form
    Then user should be redirected to the account page
      And the message "Your account is now active" should be shown

  Scenario: User already has Myer one membership and create online account
    When user clicks on the create account button
      And user enters a valid email address
      And user enters valid details for signup form
      And user enters valid address
      And user clicks the find card button
      And user enter the card number
      And the user submits the signup form
    Then user should be redirected to the account page
      And the message "Your account is now active" should be shown


