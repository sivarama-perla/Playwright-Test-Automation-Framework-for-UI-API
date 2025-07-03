What is it?
--------------
This file covers the additional test scenairos to implement in future.

Implemented Scenarios
----------------------------
UI Test: (Sauce Demo)
-> Positive: Successfull login and validation of product inventory page
-> Negative: Unsuccessfull login and valdiation of Error Message

API Test: (Swagger Petstore)
-> Positive: Get a Pet details with valid Pet ID
-> Negative: Attempt to get a non-existent pet by invalid ID

UI & API Scenarios for Future Automation
-------------------------------------------

Test Scenarios for Swagger Petstore API
------------------------------------------
Test case priority	Scenario	                        Layer	        Type	            Positive	   Negative	    Rationale
1	                Login (valid/invalid/locked user)	UI & API	    Functional	        Yes	            Yes	        Core flow, first touchpoint
2	                Add to Cart / Remove from Cart	    UI	            Functional	        Yes	            Yes	        Revenue critical
3	                Checkout Flow	                    UI	            E2E	                Yes	            Yes	        Requires sequential interaction
4	                Product Sorting	                    UI	            Visual & Functional	Yes	            Yes	        Enhances UX
5	                Session Timeout Handling	        API	            Security	        Yes	            Yes	        Important for security testing
6	                API Rate Limiting	                API	            Performance	        Yes	            Yes	        Prevent abuse
7	                Field Validation (Login, Checkout)	UI	            Input Validation	Yes	            Yes	        Prevents user errors


Test Scenarios for Swagger Petstore API
------------------------------------------
Test case priority	Scenario	                                    Layer	        Type	            Positive	Negative	Rationale
1	                Add New Pet (valid/invalid data)	            API	            Functional	        Yes	        Yes	        Core flow for pet management
2	                Get Pet by ID (existing/nonexistent)	        API	            Functional	        Yes	        Yes	        Verify data retrieval & proper errorhandling
3	                Update Pet Info	                                API	            Functional	        Yes	        Yes	        Core for modifying existing resources
4	                Delete Pet (existing/nonexistent)	            API	            Functional	        Yes	        Yes	        Ensure proper cleanup and error handling
5	                Upload Pet Image	                            API & UI	    Functional	        Yes	        Yes	        Multimedia handling, UX enhancement
6	                Find Pets by Status (available/pending/sold)	API	            Functional	        Yes	        Yes	        Filters and query param validation
7	                User Login/Logout	                            UI & API	    Security	        Yes	        Yes	        Authentication flows, prevent unauthorized access
8	                Input Field Validation (Pet, User data)	        UI & API	    Input Validation	Yes	        Yes	        Prevent invalid data, avoid server errors
9	                Rate Limiting	                                API	            Performance	        Yes	        Yes	        Protect backend from abuse
10	                Session Management	                            UI & API	    Security	        Yes	        Yes	        Session expiry, token refresh
11	                UI Navigation & Responsiveness	                UI	            Visual & Functional	Yes	        Yes	        Usability, cross-device compatibility




Additional High-Value Tests we can plan and integrate with Playwright
-----------------------------------------------------------------------
Cross-browser Testing (Safari, Firefox, Edge)
Responsive Design (Mobile vs Desktop)
Accessibility Audit (a11y) using Axe-core/Pa11y
Visual Regression Tests (using Playwright snapshots)
Performace Benchmarks (Lighthouse CI)
Security Scans (ZAP for OWASP tesing)

