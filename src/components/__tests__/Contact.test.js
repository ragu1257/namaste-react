import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("contact us page test cases", () => {
  test("Should load contact us component", () => {
    render(<ContactUs />);
    const heading = screen.getByPlaceholderText("enter name");
    expect(heading).toBeInTheDocument();
  });

  test("should load the button", () => {
    render(<ContactUs />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should load 2 input boxes in the component", () => {
    render(<ContactUs />);
    const allInputs = screen.getAllByRole("textbox");
    expect(allInputs.length).toBe(2);
  });
});
