#  Playwright Testing Framework for UI and API (TypeScript + Cucumber)

## What is this repo about?

This is a test automation framework built using Playwright and TypeScript supporting both **UI** and **API** testing. It follows **Behavior-Driven Development (BDD)** principles using **Cucumber** and **Gherkin syntax**, and applies the **Page Object Model (POM)** design pattern for scalability and reusability.
As a example, I have automated Sauce Demo for UI and Swagger Perstore for API wesbites in this framework.

---

##  Key Features

-  Unified support for UI and API automation
-  BDD with Cucumber and Gherkin syntax  
-  Page Object Model (POM) architecture  
-  Modular & reusable utilities  
-  Auto-generated Cucumber HTML reports with screenshots  
-  Scalable & easily maintainable project structure  

---

## Tech Stack

| Tool        | Purpose                          |
|-------------|----------------------------------|
| Playwright  | UI & API automation testing      |
| TypeScript  | Strongly typed scripting         |
| Cucumber    | BDD-style testing framework      |
| Node.js     | JavaScript runtime engine        |
| Axios       | for HTTP/API calls               |
| Jest        | test runner and assertion library|

---

## Pre-requisites

Ensure the following tools are installed before running the project:

| Tool       | Required Version     |
|------------|----------------------|
| Node.js    | `v22.17.0` or above  |
| VS Code    | `v1.101.2` (suggested) |
| Git        | Latest stable version |

---

##  Project Setup (Local Environment)

```bash
# 1️⃣ Clone the repository
git clone <your-repo-url>

# 2️⃣ Navigate to the project directory
cd Playwright-Test-Automation-Framework-for-UI-API

# 3️⃣ Install project dependencies
npm install
npx playwright install
```

---

## Executing Tests

To run all tests, execute the following command:

```bash
npm run test
```

---

## Test Reports

After execution:

-  **HTML-Cucumber Report** is generated automatically at:  
  `./src/test-result/reports/`

-  **Screenshots** of test success/failures are stored at:  
  `./src/test-result/screenshots/`

---

 **Note:**  
For additional planned scenarios and test cases (including both UI and API), refer to:  
[`additional-testscenarios.md`](./additional-testscenarios.md)

---

##  File Structure Overview

| Folder/File             | Purpose                                                                |
|-------------------------|------------------------------------------------------------------------|
| `src/`                  | Main test library (features, page objects, steps, utilities)           |
| `test-result/`          | Stores test output (screenshots, reports)                              |
| `tsconfig.json`         | TypeScript compiler configuration                                      |
| `cucumber.json`         | Cucumber settings (feature paths, steps, reporting, modules)           |
| `package.json`          | Project metadata, dependencies, scripts                                |
| `package-lock.json`     | Dependency tree lock for reproducibility                               |

---

## Key Folder Breakdown

###  `src/test/pageObjects/`
- `.ts` files for both UI (**SauceDemo**) and API (**Swagger Petstore**)
- Central repository of reusable web locators and methods (POM pattern)

###  `src/test/features/`
- Contains `.feature` files written in **Gherkin BDD syntax**
  - `ui/` → UI scenarios (for sauce demo website)
  - `api/` → API scenarios (for swagger petstore)

###  `src/test/steps/`
- Step definition files (glue code between Gherkin steps & logic)

###  `src/test/utilities/`
- Shared utility/helper modules reused across the project (follows **DRY** principle)

###  `src/test-result/reports/`
- Auto-generated HTML reports (Cucumber format)

###  `src/test-result/screenshots/`
- Screenshots of test failures for visual debugging

---
Example test run and results to refer as below,

![image](https://github.com/user-attachments/assets/7b5b41d5-2deb-4a93-a039-67f896925a97)
![image](https://github.com/user-attachments/assets/1815def9-291e-43a0-8ffe-94da80acedc8)




---

##  Author

**Sivaramakrishna Perla**

---
