import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Signup from "../components/Signup";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";

describe("Signup Page", () => {
  test("Signup page is loaded", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Signup />
        </BrowserRouter>
      </Provider>
    );
    const element = screen.getByText("EMAIL");
    const elementTwo = screen.getByText("PASSWORD");
    const e = screen.getByText("CONFIRM PASSWORD");
    const e3 = screen.getByText("FIRSTNAME");
    const e4 = screen.getByText("LASTNAME");

    expect(e).toBeDefined();
    expect(e3).toBeDefined();
    expect(e4).toBeDefined();
    expect(elementTwo).toBeDefined();
    expect(element).toBeDefined();
  });
});
