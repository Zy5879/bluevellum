/* eslint-disable @typescript-eslint/no-unsafe-call */
import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  test("Navbar content", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const element = screen.getByText("Blue Vellum");
    expect(element).toBeDefined();
  });
  test("home click is rendered", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const link = screen.getByRole("link", { name: "HOME" });
    expect(link.getAttribute("href")).toBe("/");
  });
  test("bags click is rendered", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const link = screen.getByRole("link", { name: "BAGS" });
    expect(link.getAttribute("href")).toBe("/products/bags");
  });
  test("wallets click is rendered", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const link = screen.getByRole("link", { name: "WALLETS" });
    expect(link.getAttribute("href")).toBe("/products/wallets");
  });
  test("accessories click is rendered", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const link = screen.getByRole("link", { name: "ACCESSORIES" });
    expect(link.getAttribute("href")).toBe("/products/accessories");
  });
  test("custom click is rendered", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const link = screen.getByRole("link", { name: "CUSTOMS" });
    expect(link.getAttribute("href")).toBe("/products/customs");
  });
});
