import { describe, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { expect } from "@jest/globals";

describe("Navbar", () => {
  test("Blue vellum in nav redirects to home page", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    const element = screen.getByText("Blue Vellum");
    fireEvent.click(element);
    expect(window.location.pathname).toBe("/");
  });
  test("home click is rendered", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByRole("link", { name: "HOME" });
    expect(link.getAttribute("href")).toBe("/");
  });
  test("bags click is rendered", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByRole("link", { name: "BAGS" });
    expect(link.getAttribute("href")).toBe("/products/bags");
  });
  test("wallets click is rendered", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByRole("link", { name: "WALLETS" });
    expect(link.getAttribute("href")).toBe("/products/wallets");
  });
  test("accessories click is rendered", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByRole("link", { name: "ACCESSORIES" });
    expect(link.getAttribute("href")).toBe("/products/accessories");
  });
});
