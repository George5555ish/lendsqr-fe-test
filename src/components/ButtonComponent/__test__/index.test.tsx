import React from "react";
import ReactDOM from "react-dom";
import Button from "../index";
import {render, cleanup,screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup)
it("renders button without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Button
    buttonText={"Test"}
    buttonHandler={() => {}}
    type={"button"}
  ></Button>,div
  );  
});

it("renders button correctly", () => {
    render( <Button
    buttonText={"Test"}
    buttonHandler={() => {}}
    type={"button"}
  />)
  expect( screen.getByTestId('button-component')).toHaveTextContent("Test")
     
  });

//   PLEASE UNCOMMENT CODE BELOW FOR NEGATIVE TEST
