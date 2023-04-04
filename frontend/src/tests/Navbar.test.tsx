/* eslint-disable @typescript-eslint/no-unsafe-call */
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  it("Navbar content", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent(/Blue Vellum$/i);
  });
});
