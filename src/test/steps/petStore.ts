import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PetApi } from '../pageObjects/petApi';
import axios from 'axios';
setDefaultTimeout(60000);

const petApi = new PetApi();

let petId: string | number;
let response: any;

Given('the Petstore API is available', async function () {
    // Check if the Petstore API is available by making a request to its base URL
    try {
        const response = await axios.get('https://petstore.swagger.io/v2/swagger.json');
        if (response.status !== 200) {
            throw new Error('Petstore API is not available');
        }
        console.log('Petstore API is available');
    } catch (error) {
        throw new Error('Petstore API is not available');
    }
});

Given('I have a valid pet', async function () {
  // I am Generating a random pet ID to avoid conflicts with existing pets if any as it's public API
  this.petId = Math.floor(Math.random() * 1000000) + 1000;
  console.log(`Generated pet ID: ${this.petId}`);
  await axios.delete(`https://petstore.swagger.io/v2/pet/${this.petId}`, { validateStatus: () => true });
  const createResponse = await axios.post('https://petstore.swagger.io/v2/pet', {
    id: this.petId,
    name: 'TestPet',
    photoUrls: [],
    status: 'available'
  });

  console.log('Creation of New Pet:', createResponse.status, createResponse.data);
  if (![200, 201].includes(createResponse.status)) {
    throw new Error(`Failed to create pet with ID ${this.petId}. Status: ${createResponse.status}`);
  } 

  const getResponse = await axios.get(`https://petstore.swagger.io/v2/pet/${this.petId}`, { validateStatus: () => true });


});

When('I fetch the pet by ID', async function () {
  // Fetch the pet by ID using the PetApi class
  response = await axios.get(`https://petstore.swagger.io/v2/pet/${this.petId}`, { validateStatus: () => true });
});

Then('the response status should be {int}', function (statusCode: number) {
  expect(response.status).toBe(statusCode);
  console.log(`Expected status code: ${statusCode}, Actual status code: ${response.status}`);
});

Then('the response should include the pet ID', async function () {
  expect(response.data.id).toBe(this.petId);
  console.log(`Expected pet ID: ${this.petId}, Actual pet ID: ${response.data.id}`);
});

Given('I have an invalid pet ID', async function () {
  this.petId = Math.floor(Math.random() * 1000000) + 2000000;
  await axios.delete(`https://petstore.swagger.io/v2/pet/${this.petId}`, { validateStatus: () => true });
  // It won't create any pet but it just delete if any pet exists
  console.log(`Using invalid pet ID: ${this.petId}`);
});
