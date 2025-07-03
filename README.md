# ✅ Playwright Testing Framework for UI + API (TypeScript + Cucumber)

## 📌 What Is It?

This is an automated testing framework built using **[Playwright](https://playwright.dev)** and **TypeScript**, supporting both **UI** and **API** testing. It follows **Behavior-Driven Development (BDD)** principles using **Cucumber** with **Gherkin syntax**, and applies the **Page Object Model (POM)** design pattern for scalability and reusability.

---

## 🚀 Key Features

- 🔹 Unified support for UI and API testing
- 🔹 BDD with Cucumber + Gherkin
- 🔹 Page Object Model (POM)
- 🔹 Reusable utilities and helpers
- 🔹 HTML reports with screenshots
- 🔹 Easily extendable and scalable

---

## 🧱 Tech Stack

| Tool          | Purpose                  |
|---------------|--------------------------|
| Playwright    | UI & API automation      |
| TypeScript    | Strongly-typed scripting |
| Cucumber      | BDD syntax integration   |
| Node.js       | Runtime environment      |

---

## 🛠️ Pre-requisites

Make sure the following tools are installed:

| Software    | Required Version |
|-------------|------------------|
| Node.js     | v22.17.0 or higher |
| VS Code     | v1.101.2 (recommended) |
| Git         | Latest stable    |

---

## 🧪 Project Setup (Local)

```bash
# 1. Clone the repository
git clone <your-repo-url>

# 2. Navigate to the project folder
cd Playwright-Test-Automation-Framework-for-UI-API

# 3. Install dependencies
npm install
npx playwright install

## ▶️ Execution of Test Cases

To execute all tests, run the following command:

```bash
npm run test

After the test run completes:

✅ An HTML-Cucumber Report is automatically generated at:

bash
Copy
Edit
./src/test-result/reports
📸 Screenshots for each test failure are saved at:

bash
Copy
Edit
./src/test-result/screenshots
📌 Note:
For additional future test scenarios (positive and negative paths for both UI and API), refer to the additional-testscenarios.md file.

🗂️ File Structure Overview
Folder/File	Purpose
src/	Main test library containing features, page objects, steps, and utilities
test-result/	Stores output reports and screenshots after test execution
tsconfig.json	TypeScript compiler configuration
cucumber.json	Cucumber config to locate feature files, steps, and set reporting rules
package.json	Manages project metadata, scripts, and dependencies
package-lock.json	Locks dependency tree for reproducible builds

📁 Key Folder Breakdown
src/test/pageObjects/
Contains .ts files for both UI (SauceDemo) and API (Swagger Petstore).

Each file acts as a central repository for selectors and reusable methods.

src/test/features/
Contains BDD-style .feature files written in Gherkin syntax.

ui/ – Feature files for UI tests

api/ – Feature files for API tests

src/test/steps/
Step definitions (glue code) that bind Gherkin steps to test implementations.

src/test/utilities/
Shared helper modules used across page objects, steps, and tests.

Promotes the DRY (Don't Repeat Yourself) principle.

src/test-result/reports/
Location of automatically generated HTML-Cucumber reports.

src/test-result/screenshots/
Screenshots captured during test failures are stored here for debugging.

📘 For test design reasoning and scenario justification, refer to:
test-explanation.md

👤 Author: Sivaramakrishna Perla
