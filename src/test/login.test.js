import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../pages/login";
import LoginForm from "../component/common/loginForm/loginForm";

describe("<LoginForm />", () => {
  it("renders styled button with correct styles", () => {
    const { getByText } = render(<LoginForm>Click me</LoginForm>);
    const buttonElement = getByText(/click me/i);
    expect(buttonElement).toHaveStyle(`
        background-color: blue;
        color: white;
        font-size: 1rem;
        padding: 0 16px;
      `);
  });
});
