# 🤖 AI-Powered Playwright Booking Automation Framework

A Playwright-based automation framework built with the **Page Object Model (POM)** and enhanced with **AI-powered failure analysis and locator self-healing** using Google Gemini.

The project automates key Booking.com flows for **Hotels, Flights, and Attractions** and supports execution across multiple browsers.

---

## 🚀 Project Overview

This project started as a manually built Playwright automation framework.

The goal of the AI layer is not to generate the entire automation suite, but to help with one of the common maintenance challenges in UI automation:

> **What happens when a locator changes in the future?**

The framework currently provides:

- Automated Booking.com UAT flows
- Page Object Model architecture
- Multi-browser execution
- Allure reporting
- AI-powered failure analysis
- AI-assisted locator identification
- AI-powered locator self-healing

---

## 🏗️ Framework Structure

```text
booking-playwright-automation/
│
├── ai/
│   ├── failureAnalyzer.js
│   ├── failureCollector.js
│   ├── locatorAdvisor.js
│   └── promptBuilder.js
│
├── pageobjects/
│   ├── HotelBook.js
│   ├── FlightBook.js
│   └── AttractionsBook.js
│
├── tests/
│   └── bookingUAT.spec.js
│
├── ai-reports/
│
├── test-results/
│
├── playwright-report/
│
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
````

---

## 🧪 Automated Scenarios

### 🏨 Hotel Booking

The Hotel Booking flow covers:

* Destination selection
* Flexible date selection
* Guest and room configuration
* Filters
* Property price comparison
* Lowest-price property selection
* Property-page validation
* Reservation flow

### ✈️ Flight Booking

The Flight Booking flow covers:

* Origin selection
* Destination selection
* Dynamic departure and return dates
* Flight search
* Re-selection flow
* Flight price comparison
* Highest-priced flight selection
* Flight-page validation

### 🎟️ Attractions

The Attractions flow covers:

* Attraction search
* Attraction date selection
* Filters
* Lowest-price attraction selection
* Attraction-page validation

---

## 🌐 Cross-Browser Testing

The framework supports execution across:

* Chromium
* Firefox
* WebKit

Tests can be executed across the configured browsers using:

```bash
npx playwright test
```

A single test suite can therefore be validated against multiple browser engines.

---

## 📊 Allure Reporting

Allure is integrated to provide a visual test execution report.

Run the tests:

```bash
npx playwright test
```

Then generate/open the Allure report using the configured Allure commands.

The report provides visibility into:

* Passed tests
* Failed tests
* Test steps
* Execution details
* Screenshots and other available artifacts

---

# 🤖 AI Layer

The AI layer is focused on two practical QA automation capabilities.

## 1. AI Failure Analysis

When a Playwright test fails, the framework collects useful failure information such as:

* Test name
* Browser
* Error message
* Stack trace
* Failure location
* Source code around the failure
* Current URL
* Screenshot information

This information is sent to Google Gemini for analysis.

The AI analyzes:

* What exactly failed
* The likely root cause
* Failure category
* Supporting evidence
* Recommended investigation steps
* Confidence level

Example:

```text
Playwright Failure
        ↓
Failure Collector
        ↓
Failure Evidence
        ↓
Prompt Builder
        ↓
Google Gemini
        ↓
AI Failure Analysis
        ↓
JSON Report
```

Generated reports are stored under:

```text
ai-reports/
```

---

## 2. AI Locator Self-Healing

The framework also contains a simple proof-of-concept for locator self-healing.

When a locator fails:

```text
Original Locator
       ↓
Locator Failure
       ↓
Current DOM Inspection
       ↓
Google Gemini
       ↓
Replacement Locator
       ↓
Retry Action
```

For example, a locator might originally use:

```javascript
page.getByText('A Week', { exact: true })
```

while the actual page contains:

```text
A week
```

The AI can identify the mismatch and suggest:

```javascript
page.getByText('A week', { exact: true })
```

The framework then retries the action with the suggested locator.

### Example Result

```text
========== AI HEALING TRIGGERED ==========

AI Locator Suggestion:
{
  "strategy": "text",
  "value": "A week",
  "reason": "The original locator failed due to case sensitivity.",
  "confidence": "HIGH"
}

✅ AI Locator Healing Successful!
```

The important goal is to demonstrate the concept of:

> **Detect → Analyze → Suggest → Retry**

rather than automatically modifying the entire Page Object source code.

---

# 🔐 Environment Setup

The Gemini API key is stored in an environment variable and is **not committed to GitHub**.

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

The `.env` file is excluded through `.gitignore`.

---

# 📦 Installation

Clone the repository and install dependencies:

```bash
npm install
```

Required AI packages include:

```bash
npm install @google/genai dotenv
```

Playwright dependencies can be installed with:

```bash
npx playwright install
```

---

# ▶️ Running Tests

Run the complete test suite:

```bash
npx playwright test
```

Run a specific browser:

```bash
npx playwright test --project=chromium
```

```bash
npx playwright test --project=firefox
```

```bash
npx playwright test --project=webkit
```

Run a specific test:

```bash
npx playwright test -g "Hotel Booking UAT"
```

---

# 🧰 Tech Stack

| Technology        | Purpose                                    |
| ----------------- | ------------------------------------------ |
| Playwright        | UI automation                              |
| JavaScript        | Test implementation                        |
| Page Object Model | Framework architecture                     |
| Google Gemini     | AI failure analysis and locator assistance |
| @google/genai     | Gemini API integration                     |
| Allure            | Test reporting                             |
| Git / GitHub      | Version control                            |

---

# 🎯 Project Goals

The primary objective of this project is to explore how AI can be integrated into a Playwright automation framework to reduce the impact of UI locator changes and simplify test failure investigation.

The project focuses on:

```text
Playwright Automation
        +
Page Object Model
        +
Cross-Browser Testing
        +
AI Failure Analysis
        +
AI Locator Self-Healing
```

---

# 🔮 Future Improvements

The current implementation is intentionally kept small and focused.

Potential future improvements include:

* Expanding self-healing coverage to more known locator-risk areas
* Making locator healing reusable across more Page Objects
* Improving locator validation before retrying
* Adding more failure scenarios
* Improving AI response handling and reporting
* Expanding AI-assisted maintenance capabilities

---

# 👨‍💻 Author

**Subir Kundu**

Software QA Engineer | Playwright | JavaScript | API Testing | AI-Assisted Test Automation

---

## 📌 Disclaimer

This project is an educational and portfolio-oriented automation framework created to demonstrate practical integration of AI capabilities into Playwright-based testing.
