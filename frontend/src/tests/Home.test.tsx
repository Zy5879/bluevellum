import { describe, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import Home from "../components/Home";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";

describe("Home", () => {
  test("home page is loaded", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    const element = screen.getByText("HAND CRAFTED LEATHER GOODS");
    expect(element).toBeDefined();
  });
  test("shop now click is rendered", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText("SHOP PRODUCTS");
    fireEvent.click(link);

    expect(window.location.pathname).toBe("/products/bags");
  });
  test("bag click is rendered", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText("SHOP BAGS");
    fireEvent.click(link);

    expect(window.location.pathname).toBe("/products/bags");
  });
  test("wallet click is rendered", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText("SHOP WALLETS");
    fireEvent.click(link);

    expect(window.location.pathname).toBe("/products/wallets");
  });
  test("accessories click is rendered", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText("SHOP ACCESSORIES");
    fireEvent.click(link);

    expect(window.location.pathname).toBe("/products/accessories");
  });
});
