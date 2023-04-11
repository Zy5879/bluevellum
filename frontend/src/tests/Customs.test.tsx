import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Customs from "../components/Customs";
import { BrowserRouter } from "react-router-dom";

describe("Accessories", () => {
  test("accessories component content", () => {
    render(
      <BrowserRouter>
        <Customs />
      </BrowserRouter>
    );
    const element = screen.getByText("This is Customs");
    expect(element).toBeDefined();
  });
});
