# 🧪 UAT Test Cases

This document contains the User Acceptance Test (UAT) scenarios covered by the Playwright automation framework.

The test cases are grouped into:

- Hotel Booking
- Flight Booking
- Attractions

---

# 🏨 Hotel Booking Test Cases

## TC-H01 — Search Hotel

**Module:** Hotel Booking  
**Priority:** High

### Preconditions
- Booking.com is accessible.
- Hotel search page is available.

### Test Steps
1. Open Booking.com.
2. Navigate to the Hotels/Stays search.
3. Enter `Cox's Bazar` as the destination.
4. Select flexible dates.
5. Select the required stay duration.
6. Configure guests and rooms.
7. Click Search.

### Expected Result
Hotel search results should be displayed successfully.

---

## TC-H02 — Configure Children and Rooms

**Module:** Hotel Booking  
**Priority:** High

### Test Steps
1. Open the guest/room configuration.
2. Add 3 children.
3. Assign ages to the children.
4. Add the required rooms.
5. Confirm the selection.

### Expected Result
The selected number of children, their ages, and rooms should be accepted successfully.

---

## TC-H03 — Apply Hotel Filters

**Module:** Hotel Booking  
**Priority:** Medium

### Test Steps
1. Open the hotel search results.
2. Apply the configured property filters.
3. Wait for the results to update.
4. Verify that the filtered results are displayed.

### Expected Result
Search results should reflect the selected filters.

---

## TC-H04 — Identify Lowest-Priced Hotel

**Module:** Hotel Booking  
**Priority:** High

### Test Steps
1. Retrieve the available hotel prices.
2. Compare the prices across the available property cards.
3. Identify the lowest price.
4. Identify the corresponding hotel card.

### Expected Result
The automation should correctly identify the hotel with the lowest available price.

---

## TC-H05 — Open Lowest-Priced Hotel

**Module:** Hotel Booking  
**Priority:** High

### Test Steps
1. Identify the lowest-priced hotel.
2. Open the selected property.
3. Wait for the property page to load.

### Expected Result
The selected lowest-priced property should open successfully.

---

## TC-H06 — Validate Hotel Price

**Module:** Hotel Booking  
**Priority:** High

### Test Steps
1. Record the lowest price from the search results.
2. Open the selected property.
3. Retrieve the property price from the new page.
4. Compare both prices.

### Expected Result
The price displayed on the property page should match the lowest price identified from the search results.

---

# ✈️ Flight Booking Test Cases

## TC-F01 — Search Flight

**Module:** Flight Booking  
**Priority:** High

### Preconditions
- Booking.com flight search page is available.

### Test Steps
1. Open Booking.com.
2. Navigate to Flights.
3. Select `Toronto, Canada` as the origin.
4. Select `Kolkata, India` as the destination.

### Expected Result
The origin and destination should be selected successfully.

---

## TC-F02 — Select Dynamic Flight Dates

**Module:** Flight Booking  
**Priority:** High

### Test Steps
1. Open the departure date selector.
2. Calculate the departure date dynamically.
3. Select the departure date.
4. Calculate the return date dynamically.
5. Select the return date.

### Expected Result
The calculated departure and return dates should be selected successfully.

---

## TC-F03 — Recover Flight Search Selection

**Module:** Flight Booking  
**Priority:** High

### Test Steps
1. Trigger the flight search flow.
2. Handle the search error/reselection scenario.
3. Re-enter the origin.
4. Re-enter the destination.
5. Select the required options.
6. Perform the search again.

### Expected Result
The flight search should recover successfully and display flight results.

---

## TC-F04 — Identify Highest-Priced Flight

**Module:** Flight Booking  
**Priority:** High

### Test Steps
1. Retrieve the available flight result cards.
2. Read the prices.
3. Compare all available flight prices.
4. Identify the highest-priced flight.

### Expected Result
The automation should correctly identify the flight with the highest price.

---

## TC-F05 — Validate Selected Flight

**Module:** Flight Booking  
**Priority:** High

### Test Steps
1. Select the highest-priced flight.
2. Open the flight details page.
3. Retrieve the displayed flight price.
4. Compare it with the previously identified highest price.

### Expected Result
The displayed flight price should match the highest-priced flight identified from the search results.

---

# 🎟️ Attractions Test Cases

## TC-A01 — Search Attraction

**Module:** Attractions  
**Priority:** High

### Preconditions
- Booking.com is accessible.

### Test Steps
1. Open Booking.com.
2. Navigate to Attractions.
3. Enter `Big Ben` as the attraction/destination.
4. Select the matching attraction.

### Expected Result
The selected attraction should be accepted successfully.

---

## TC-A02 — Select Attraction Dates

**Module:** Attractions  
**Priority:** High

### Test Steps
1. Open the attraction date selector.
2. Calculate the start date dynamically.
3. Select the start date.
4. Calculate the end date dynamically.
5. Select the end date.
6. Start the attraction search.

### Expected Result
The selected attraction dates should be accepted and the search should proceed successfully.

---

## TC-A03 — Apply Attraction Filters

**Module:** Attractions  
**Priority:** Medium

### Test Steps
1. Open the attraction search results.
2. Apply the required attraction filters.
3. Wait for the results to update.

### Expected Result
The results should reflect the selected filters.

---

## TC-A04 — Identify Lowest-Priced Attraction

**Module:** Attractions  
**Priority:** High

### Test Steps
1. Retrieve the available attraction prices.
2. Compare the displayed prices.
3. Identify the lowest-priced attraction.
4. Select the corresponding result.

### Expected Result
The automation should correctly identify the attraction with the lowest available price.

---

## TC-A05 — Validate Attraction Details

**Module:** Attractions  
**Priority:** High

### Test Steps
1. Open the selected lowest-priced attraction.
2. Wait for the attraction details page to load.
3. Validate the selected attraction information.

### Expected Result
The selected attraction details page should open successfully and correspond to the selected attraction.

---

# 🤖 AI-Assisted Test Maintenance

The framework also contains AI-assisted capabilities for test maintenance.

## TC-AI01 — AI Failure Analysis

**Module:** AI Layer  
**Priority:** High

### Test Steps
1. Execute an automated test.
2. Introduce an intentional test failure.
3. Capture the failure information.
4. Send the failure information to Gemini.
5. Analyze the generated response.

### Expected Result
The AI should identify the failure, determine the likely root cause, classify the failure, and provide evidence-based recommendations.

---

## TC-AI02 — AI Locator Advisor

**Module:** AI Layer  
**Priority:** High

### Test Steps
1. Introduce an intentional locator mismatch.
2. Execute the test.
3. Detect the locator failure.
4. Capture the current page/DOM information.
5. Send the information to Gemini.
6. Request a replacement locator.

### Expected Result
The AI should identify the failed locator and suggest a suitable replacement based on the available page information.

---

## TC-AI03 — AI Locator Self-Healing

**Module:** AI Layer  
**Priority:** High

### Test Steps
1. Introduce an intentional locator mismatch.
2. Execute the test.
3. Detect the locator failure.
4. Ask Gemini for a replacement locator.
5. Create the suggested locator.
6. Retry the failed action.

### Expected Result
The framework should successfully recover from the locator mismatch and continue the test when a valid replacement locator is identified.

---

# 📊 Test Case Summary

| Area | Test Cases |
|------|------------|
| Hotel Booking | TC-H01 – TC-H06 |
| Flight Booking | TC-F01 – TC-F05 |
| Attractions | TC-A01 – TC-A05 |
| AI Layer | TC-AI01 – TC-AI03 |
| **Total** | **19** |

---

# 🎯 Automation Coverage

These test cases represent the major flows currently automated in the Playwright framework.

The AI-related test cases are specifically intended to demonstrate:

```text
Failure Detection
       ↓
AI Failure Analysis
       ↓
Locator Failure Detection
       ↓
AI Locator Suggestion
       ↓
Locator Self-Healing
       ↓
Test Recovery