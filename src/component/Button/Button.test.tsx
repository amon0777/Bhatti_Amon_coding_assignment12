import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import Button from "./Button";

test("Button is visible", () => {
  const { getByText } = render(<Button label="Test" />);
  expect(getByText("Test")).toBeVisible();
});

test("Button changes style when disabled", () => {
  const { getByText } = render(<Button label="Disabled" disabled />);
  expect(getByText("Disabled")).toHaveStyle("opacity: 0.5");
});
