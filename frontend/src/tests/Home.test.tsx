import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { BrowserRouter } from "react-router-dom";

describe("Accessories", () => {
  test("accessories component content", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const element = screen.getByText("This is Home");
    expect(element).toBeDefined();
  });
});
