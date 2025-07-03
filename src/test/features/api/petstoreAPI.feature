Feature: Petstore API

    As a user
    I want to access the Petstore API
    So that I can perform operations on pets

  Background:
    Given the Petstore API is available

  @smoke @regression @valid_get_pet
  Scenario: Get pet by valid ID
    Given I have a valid pet
    When I fetch the pet by ID
    Then the response status should be 200
    And the response should include the pet ID

  @regression @invalid_get_pet
  Scenario: Get pet by invalid ID
    Given I have an invalid pet ID
    When I fetch the pet by ID
    Then the response status should be 404