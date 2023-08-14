Feature: www.myer.com.au/join



  Scenario: Sign-up a myer account without MYER one member
    When I navigate to the www.myer.com.au
    Then I entered a valid email address
    Then I clicked the Join button
  

  Scenario: Sign-up a myer account without MYER one member with invalid email
    When I navigate to the www.myer.com.au
    Then I entered a invalid email address
    Then I clicked the Join button

