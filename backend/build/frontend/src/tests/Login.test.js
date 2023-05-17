"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const Login_1 = __importDefault(require("../components/Login"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const store_1 = require("../redux/store");
const globals_1 = require("@jest/globals");
(0, vitest_1.describe)("Login", () => {
    (0, vitest_1.test)("Login page is loaded", () => {
        (0, react_1.render)(<react_redux_1.Provider store={store_1.store}>
        <react_router_dom_1.BrowserRouter>
          <Login_1.default />
        </react_router_dom_1.BrowserRouter>
      </react_redux_1.Provider>);
        const element = react_1.screen.getByText("EMAIL");
        const elementTwo = react_1.screen.getByText("PASSWORD");
        const e3 = react_1.screen.getByText("SIGN UP");
        (0, globals_1.expect)(element).toBeDefined();
        (0, globals_1.expect)(elementTwo).toBeDefined();
        (0, globals_1.expect)(e3).toBeDefined();
    });
    (0, vitest_1.test)("signup page is loaded onClick", () => {
        (0, react_1.render)(<react_redux_1.Provider store={store_1.store}>
        <react_router_dom_1.BrowserRouter>
          <Login_1.default />
        </react_router_dom_1.BrowserRouter>
      </react_redux_1.Provider>);
        const e3 = react_1.screen.getByText("SIGN UP");
        react_1.fireEvent.click(e3);
        (0, globals_1.expect)(window.location.pathname).toBe("/signup");
    });
});
