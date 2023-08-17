Feature: Myer Signup functionality

  # Background: empty Myer sign-up website
  #   Given user navigates to the Myer sign-up website

  Scenario: User create account
    Given user visits on the signup page
    When user enters a valid email address
      And user clicks on the join button
      And user enters valid details for signup form with date of birth
      And the user submits the signup form
    Then user should be redirected to the account page
      And the message "Congratulations, your account has been created and your MYER one number has been added" should be shown

  Scenario: User create account and enter the address manually
    Given user visits on the signup page
    When user enters a valid email address
      And user clicks on the join button
      And user enters valid details for signup form with date of birth
      And user could not find entered address
      And user clicks on the Enter Address Manually button
      And user enters valid address information manually
      And the user submits the signup form
    Then user should be redirected to the account page
      And the message "Congratulations, your account has been created and your MYER one number has been added" should be shown

  Scenario: User create account though the Create Account button
    Given user visits on the signup page
    When user clicks on the create account button
      And user enters a valid email address
      And user enters valid details for signup form
      And the user submits the signup form
    Then user should be redirected to the account page
      And the message "Your account is now active" should be shown

  Scenario: User already has Myer one membership and create online account
    Given user visits on the signup page
    When user clicks on the create account button
      And user enters a valid email address
      And user enters valid details for signup form
      And user clicks the find card button
      And user enter the card number
      And the user submits the signup form
    Then user should be redirected to the account page
      And the message "Your account is now active" should be shown
