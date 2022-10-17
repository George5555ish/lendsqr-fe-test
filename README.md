<h1 align="center">
 <br>
  <img src="./src/assets/logo.svg" alt="lendsqr logo" title="lendsqr logo" width="300">
  <br>
  Lendsqr Frontend Engineer Assessment
 
</h1>
<p align="center" style="font-size: 1.2rem;">A Dashboard Frontend with REST API and indexedDB.</p>
 
<hr />

[![Build Status][build-badge]][build] 
  [![version][version-badge]][package]
[![MIT License][license-badge]][license]

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]  
 
 

## Frontend Assessment

Build out a Frontend with React and SCSS, with indexedDB/LocalStorage to persist user data, as well as a mock API to get all users.
  
### Solution

Please follow the table of contents below as a guide through the application.
  

## Table of Contents
 

- [Installation](#installation)
- [Usage](#usage) 
- [Example](#example) 
- [Contributors](#contributors)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This project is distributed via [npm][npm] which is bundled with [node][node] and
should have all `dependencies` installed:

```
npm install  
```
or using `Yarn`
```
yarn add  
```

> This package also depends on `react`. Please make sure you have it installed
> as well. 👍

## Usage

Upon running the project, you can spin up the server by running the following code:

```
npm start  
```
or using `Yarn`
```
yarn start  
```

### UI Interaction

Upon running the project, you will first be greeted with the login page, according to the UI design. 

 > The form will not be submitted till you input some data. This is only to demonstrate form validation on the page. The details put in, don't matter. 

  > On the dashboard page, we click the three dots on the users item to open the details modal, as per the UI design. We also click the table header to open the filter dropdown.

## Testing

To start the test cases, simply run the test script below:

```
npm run test 
```
> [Ensure to use in a separate terminal] 


### Example
 
```jsx
import React from "react";
import ReactDOM from "react-dom";
import Input from "../index";
import {render, cleanup,screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup)
it("renders input without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Input
    placeholder={"Test"}
    required 
    inputType={"text"}
  ></Input>,div
  );  
});

it("renders input correctly", () => {
    render( <Input
      placeholder={"Test"}
      required 
      inputType={"text"}
  />)
  expect( screen.getByTestId('input-component')).toHaveClass("input_container")
     
  });
```
 
   
 
### Test Case

 The Tests are set up to have the positive cases active.
 To check on negative test cases, you will see the commented code in each test file. You can comment out the positive test code and uncomment the negative test case, then save to restart the test server
  

## Contributors

No Current Contributors:
 
Contributions of any kind are welcome!

## LICENSE

MIT

### DEMO

You can check out the live project at [live-demo]

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]:
  https://img.shields.io/github/workflow/status/downshift-js/downshift/validate?logo=github&style=flat-square
[build]:
  https://github.com/George5555ish/lendsqr-fe-test
[coverage-badge]:
  https://img.shields.io/codecov/c/github/downshift-js/downshift.svg?style=flat-square
 
[version-badge]: https://img.shields.io/npm/v/downshift.svg?style=flat-square
[package]: https://www.npmjs.com
 
[npmcharts]: http://npmcharts.com/compare/downshift
[license-badge]: https://img.shields.io/npm/l/downshift.svg?style=flat-square
[license]: https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt
[prs-badge]:
  https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]:  https://github.com/George5555ish/lendsqr-fe-test
 [live-demo]:  https://mbajiaku-george-lendsqr-fe-test.netlify.app/
 
  