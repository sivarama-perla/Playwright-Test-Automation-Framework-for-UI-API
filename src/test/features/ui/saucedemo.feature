Feature: Login Functionality

    As a registered user
    I want to log in to the application with valid credentials
    So that I can access the product inventory page

  Background:
    Given I am on the login page

@smoke @regression @valid_login
Scenario Outline: Successful login with valid username and password
    When I enter the username as "<valid_username>"
    And I enter the password as "<valid_password>"
    And I click the login button
    Then I should be redirected to the product inventrory page
Examples:
    | valid_username         | valid_password        |
    | standard_user          | secret_sauce          |

 @regression @invalid_login      
Scenario Outline: Unsuccessful login with locked user account
    When I enter the username as "<locked_username>"
    And I enter the password as "<password>"
    And I click the login button
    Then I should see an error message indicating invalid credentials
Examples:
    | locked_username           | valid_password        |
    | locked_out_user           | secret_sauce          |
    