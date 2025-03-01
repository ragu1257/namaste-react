import Footer from "../Footer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test cases of the footer", () => {
  test("should load the component", () => {
    render(<Footer />);
    const input = screen.getByText(/this is /i);
    expect(input).toBeInTheDocument();
  });
});
