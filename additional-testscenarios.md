## ✅ Test Coverage Plan

This section documents the **implemented** and **planned** test automation scenarios for:

- 🧪 **UI Tests** (using [Playwright](https://playwright.dev))
- 🔌 **API Tests** (based on [Swagger Petstore](https://petstore.swagger.io/))
- 🛡️ **Security, Performance, and Accessibility** enhancements

---

### ✅ Implemented Scenarios

#### UI Test (Sauce Demo)

| Test Type | Scenario                          | Path      |
|-----------|-----------------------------------|-----------|
| Positive  | Successful login and inventory page validation | ✅ |
| Negative  | Unsuccessful login and error message validation | ✅ |

#### API Test (Swagger Petstore)

| Test Type | Scenario                          | Path      |
|-----------|-----------------------------------|-----------|
| Positive  | Get a pet by valid ID             | ✅ |
| Negative  | Get a pet by **invalid/non-existent** ID | ✅ |

---

### 🔮 Future Automation Scenarios

#### 🔗 Sauce Demo – UI & API

| Priority | Scenario                          | Layer    | Type               | Positive | Negative | Rationale                          |
|----------|-----------------------------------|----------|--------------------|----------|----------|------------------------------------|
| 1        | Login (valid/invalid/locked user) | UI & API | Functional         | ✅        | ✅        | Core flow, first touchpoint         |
| 2        | Add/Remove from Cart              | UI       | Functional         | ✅        | ✅        | Revenue critical                    |
| 3        | Checkout Flow                     | UI       | E2E                | ✅        | ✅        | Requires sequential interaction     |
| 4        | Product Sorting                   | UI       | Visual & Functional| ✅        | ✅        | Enhances UX                         |
| 5        | Session Timeout Handling          | API      | Security           | ✅        | ✅        | Important for session security      |
| 6        | API Rate Limiting                 | API      | Performance        | ✅        | ✅        | Prevent abuse or misuse             |
| 7        | Field Validation (Login/Checkout) | UI       | Input Validation   | ✅        | ✅        | Prevents user errors                |

---

#### 🐶 Swagger Petstore – API & UI

| Priority | Scenario                                  | Layer    | Type               | Positive | Negative | Rationale                              |
|----------|-------------------------------------------|----------|--------------------|----------|----------|----------------------------------------|
| 1        | Add New Pet (valid/invalid data)          | API      | Functional         | ✅        | ✅        | Core flow for pet management           |
| 2        | Get Pet by ID (existing/nonexistent)      | API      | Functional         | ✅        | ✅        | Validate retrieval & error handling    |
| 3        | Update Pet Info                           | API      | Functional         | ✅        | ✅        | Modify existing pet data               |
| 4        | Delete Pet (existing/nonexistent)         | API      | Functional         | ✅        | ✅        | Ensure cleanup + 404 handling          |
| 5        | Upload Pet Image                          | API & UI | Functional         | ✅        | ✅        | File uploads + UI validation           |
| 6        | Find Pets by Status                       | API      | Functional         | ✅        | ✅        | Query parameter filtering              |
| 7        | User Login/Logout                         | UI & API | Security           | ✅        | ✅        | Auth flow validation                   |
| 8        | Input Field Validation (Pet/User data)    | UI & API | Input Validation   | ✅        | ✅        | Prevents malformed data                |
| 9        | Rate Limiting                             | API      | Performance        | ✅        | ✅        | Avoid backend overload                 |
| 10       | Session Management                        | UI & API | Security           | ✅        | ✅        | Token expiry, refresh flow             |
| 11       | UI Navigation & Responsiveness            | UI       | Visual/Functional  | ✅        | ✅        | Ensure cross-device usability          |

---

### 🧩 Additional High-Value Tests (Recommended Tools)

| Area                   | Tool(s)                        | Purpose                                 |
|------------------------|--------------------------------|-----------------------------------------|
| Cross-browser Testing  | Playwright (Chromium/FF/WebKit)| Ensure consistency across browsers      |
| Responsive Design      | Playwright + Device Emulation  | Mobile/tablet/Desktop views             |
| Accessibility Testing  | Axe-core / Pa11y               | Validate WCAG/ARIA compliance (a11y)    |
| Visual Regression      | Playwright Snapshots           | Detect unexpected UI changes            |
| Performance Benchmarks | Lighthouse CI                  | Measure speed, Core Web Vitals          |
| Security Scanning      | OWASP ZAP                      | Detect XSS, SQLi, etc.                  |
