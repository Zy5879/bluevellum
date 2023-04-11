import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Wallets from "../components/Wallets";
import { BrowserRouter } from "react-router-dom";

describe("Wallets", () => {
  test("Wallets Content", () => {
    render(
      <BrowserRouter>
        <Wallets />
      </BrowserRouter>
    );
    const element = screen.getByText("This is Wallets");
    expect(element).toBeDefined();
  });
});
