![image](https://github.com/user-attachments/assets/c608ff5d-df25-432c-9213-3ea201e8e370)

![image](https://github.com/user-attachments/assets/72b39a33-e4b3-424b-b333-3e86671b8b33)

## Instructions

This repository includes a naive implementation of a React application designed to search for, and display, information about countries (using https://restcountries.com/).

Your task is to refactor and improve the application.

Focus on clean, maintainable code and your proficiency with components, state management, and API integration.

Commit your changes as you go & submit your work via a GitHub repository link.

Update this `README` with anything that you'd like to do if you had more time.

### Things to consider

1. Accessibility // added accessibility for all of the components
2. Robust error handling // HANDLE EXCEPTION : wherever it is required handled
3. Testing // write test cases for all logical components
4. Responsiveness // managed responsiveness
5. Ease of updating the data source // use store for same purpose
6. Appearance: Style is secondary; however, a basic, user-friendly UI is appreciated // basic styling is done with simple css
7. Anything else: You are welcome to add any features that highlight your capabilities // added 3rd party library to show the place.

## Getting Started

### Scripts

1. Install packages

```sh
npm install
```

2. Run locally

```sh
npm run dev
```

3. Run test cases

```sh
npm test
 PASS  src/__tests__/search-bar.test.tsx
 PASS  src/__tests__/country-list.test.tsx
 PASS  src/__tests__/country-card.test.tsx
 PASS  src/__tests__/App.test.tsx
-----|---------|----------|---------|---------|-------------------File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----|---------|----------|---------|---------|-------------------...s |   76.31 |    77.77 |   66.66 |   75.67 |
 src |     100 |     90.9 |     100 |     100 |
  ... |     100 |     90.9 |     100 |     100 | 30
 ... |    62.5 |    57.14 |      50 |    62.5 |
  ... |      60 |    57.14 |      25 |      60 | 20-22,27-28,33
  ... |     100 |      100 |     100 |     100 |
  ... |      25 |      100 |       0 |      25 | 4-8
  ... |     100 |      100 |     100 |     100 |
-----|---------|----------|---------|---------|-------------------
Test Suites: 4 passed, 4 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        4.182 s
```

4.
