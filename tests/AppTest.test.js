import React from "react";
import { screen, render, cleanup} from "@testing-library/react";
import AppTesting from "../src/components/AppTest";

describe("App component", () => {
  beforeAll(() => {
    render(<AppTesting />);
  });

  it("should have the right message in the dom", () => {
    const message = "Hello World";

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  afterAll(cleanup);
});