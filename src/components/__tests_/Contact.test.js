import Contact from "../Contact";
import { getAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact us component test cases", () => {
  // beforeAll(() => {
  //   console.log("before all");
  // });
  // beforeEach(() => {
  //   console.log("before Each");
  // });
  // afterAll(() => {
  //   console.log("after all");
  // });
  // afterEach(() => {
  //   console.log("after Each");
  // });

  test("Should load contact component", () => {
    render(<Contact />);

    // Assertion
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  describe("Element test cases", () => {
    test("Inputs in contact component", () => {
      render(<Contact />);

      const inputs = screen.getAllByRole("textbox");

      expect(inputs.length).toBe(2);
    });

    // test and it is same
    it("Should log Placeholder in contact component", () => {
      render(<Contact />);

      const name = screen.getByPlaceholderText("Name");

      // console.log(name);
    });
  });
});
