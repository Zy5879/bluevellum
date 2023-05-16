import { describe, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../components/Login";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";

describe("Login", () => {
  test("Login page is loaded", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const element = screen.getByText("EMAIL");
    const elementTwo = screen.getByText("PASSWORD");
    const e3 = screen.getByText("SIGN UP");
    expect(element).toBeDefined();
    expect(elementTwo).toBeDefined();
    expect(e3).toBeDefined();
  });
  test("signup page is loaded onClick", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const e3 = screen.getByText("SIGN UP");
    fireEvent.click(e3);
    expect(window.location.pathname).toBe("/signup");
  });
});
