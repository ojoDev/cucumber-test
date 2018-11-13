Feature: LoginFeature
  This feature deals with the login functionality of the app

  Scenario Outline: Login with correct username and password
    Given I navigate to the login page
    And I enter <username> and <password> for login
    And I click login button
    Then I should see the userform page

    Examples:
      | username| password     |
      | admin   | adminpassword|
      | user    | pass123      |