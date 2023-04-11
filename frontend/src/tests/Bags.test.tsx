import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Bags from "../components/Bags";
import { BrowserRouter } from "react-router-dom";

describe("Accessories", () => {
  test("accessories component content", () => {
    render(
      <BrowserRouter>
        <Bags />
      </BrowserRouter>
    );
    const element = screen.getByText("This is bags");
    expect(element).toBeDefined();
  });
});
