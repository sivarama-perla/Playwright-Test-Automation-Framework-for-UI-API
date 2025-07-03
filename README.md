Playwright Testing Framework for UI + API (Typescript + Cucumber)
------------------------------------------------------------------
What is it?
This is an automated testing framework built with Playwright and TypeScript, designed to support both API and UI testing.

Approach
The framework is built with TypeScript and Cucumber, following Behavior-Driven Development (BDD) principles using the Gherkin syntax. It applies the Page Object Model (POM) design pattern with shared and reusable methods.


Pre-Requisite Softwares

Node.js - The framework requires Node.js version v22.17.0 and above.
VS Code - Preferred IDE V1.101.2.
Git     - for Cloning Project/Version Control.

 Project Setup procedure in Local Machine:
 -------------------------------------

 Step 1: Check the pre requisite softwares in your local machine and install if anything is missing from the list.

 Step 2: Clone the project to your local system.

 Step 3: Open the project with IDE.

 Step 4: Install node module dependencies using npm install and npx playwright.

Execution of Test Cases:
----------------------------

To execute tests use the command -> npm run test

Reports:
---------------

Once the execution completed HTML-Cucumber Report will be generated automatically under .\src\test-result\reports along with screenshots in Screenshot folder.

**** Important note ****
additional-testscenarios.md -> This file covers the additional test scenairos to implement in future.


File Structure and it's purpose:
-------------------------------------

src -> Library which contains feature files, Page objects, step definitons, utilities.

test-result -> Output library for screenshots and html-cucumber reports post run of test cases.

tsconfig.json -> It configures how TypeScript compiles and code, ensuring project runs smoothly with TypeScrip.

cucumber.json file -> This is Cucumber config file. Using this cucumber finds feature files, step definitions, what modules to load, how to format reports, and other runtime options.

package.json file -> Manages project dependencies, scripts and metadata which is essential for installing, running framework.

package-lock.json -> Works together with package.json to manage project dependencies reliably. 

Key Files:
-----------
pageObjects: A .ts file has been created for both UI (saucedemo) and API (petstore). Within the file it holds a central repository for all the web elements and methods.
Location: .\src\test\pageObjects

feaures: A .feature file has been created for both UI and API tests as per BDD Gherkin format
Location: .\src\test\features\api -> for api feature file,
          .\src\test\features\ui -> for ui feature file

steps: This contains step definition files which are glue between Gherkin feature files and actual test code.
Location: .\src\test\steps

utilities: It contains shared helper functions or modules to reuse across tests, step definitions, page objects. (DRY Principle)
Location: .\src\test\utilities

reports: Once the test execution completes a html-cucumber report will be generates within this folder.
Location: .\src\test-result\reports

screenshot: To take screenshots once the test case execution completes and stores here.
Location: .\src\test-result\screenshots




See `test-explanation.md` for test design and reasoning.
--------------------------------------------------------------------
Author: Sivaramakrishna Perla