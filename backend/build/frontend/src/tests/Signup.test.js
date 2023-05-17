"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const Signup_1 = __importDefault(require("../components/Signup"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const store_1 = require("../redux/store");
const globals_1 = require("@jest/globals");
(0, vitest_1.describe)("Signup Page", () => {
    (0, vitest_1.test)("Signup page is loaded", () => {
        (0, react_1.render)(<react_redux_1.Provider store={store_1.store}>
        <react_router_dom_1.BrowserRouter>
          <Signup_1.default />
        </react_router_dom_1.BrowserRouter>
      </react_redux_1.Provider>);
        const element = react_1.screen.getByText("EMAIL");
        const elementTwo = react_1.screen.getByText("PASSWORD");
        const e = react_1.screen.getByText("CONFIRM PASSWORD");
        const e3 = react_1.screen.getByText("FIRSTNAME");
        const e4 = react_1.screen.getByText("LASTNAME");
        (0, globals_1.expect)(e).toBeDefined();
        (0, globals_1.expect)(e3).toBeDefined();
        (0, globals_1.expect)(e4).toBeDefined();
        (0, globals_1.expect)(elementTwo).toBeDefined();
        (0, globals_1.expect)(element).toBeDefined();
    });
});
