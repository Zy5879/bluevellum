import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Accessories from "../components/Accessories";
import { BrowserRouter } from "react-router-dom";

describe("Accessories", () => {
  test("accessories component content", () => {
    render(
      <BrowserRouter>
        <Accessories />
      </BrowserRouter>
    );
    const element = screen.getByText("This is Accessories");
    expect(element).toBeDefined();
  });
});
