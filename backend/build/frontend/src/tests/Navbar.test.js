"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const react_redux_1 = require("react-redux");
const store_1 = require("../redux/store");
const Navbar_1 = __importDefault(require("../components/Navbar"));
const react_router_dom_1 = require("react-router-dom");
const globals_1 = require("@jest/globals");
(0, vitest_1.describe)("Navbar", () => {
    (0, vitest_1.test)("Blue vellum in nav redirects to home page", () => {
        (0, react_1.render)(<react_redux_1.Provider store={store_1.store}>
        <react_router_dom_1.BrowserRouter>
          <Navbar_1.default />
        </react_router_dom_1.BrowserRouter>
      </react_redux_1.Provider>);
        const element = react_1.screen.getByText("Blue Vellum");
        react_1.fireEvent.click(element);
        (0, globals_1.expect)(window.location.pathname).toBe("/");
    });
    (0, vitest_1.test)("home click is rendered", () => {
        (0, react_1.render)(<react_redux_1.Provider store={store_1.store}>
        <react_router_dom_1.BrowserRouter>
          <Navbar_1.default />
        </react_router_dom_1.BrowserRouter>
      </react_redux_1.Provider>);
        const link = react_1.screen.getByRole("link", { name: "HOME" });
        (0, globals_1.expect)(link.getAttribute("href")).toBe("/");
    });
    (0, vitest_1.test)("bags click is rendered", () => {
        (0, react_1.render)(<react_redux_1.Provider store={store_1.store}>
        <react_router_dom_1.BrowserRouter>
          <Navbar_1.default />
        </react_router_dom_1.BrowserRouter>
      </react_redux_1.Provider>);
        const link = react_1.screen.getByRole("link", { name: "BAGS" });
        (0, globals_1.expect)(link.getAttribute("href")).toBe("/products/bags");
    });
    (0, vitest_1.test)("wallets click is rendered", () => {
        (0, react_1.render)(<react_redux_1.Provider store={store_1.store}>
        <react_router_dom_1.BrowserRouter>
          <Navbar_1.default />
        </react_router_dom_1.BrowserRouter>
      </react_redux_1.Provider>);
        const link = react_1.screen.getByRole("link", { name: "WALLETS" });
        (0, globals_1.expect)(link.getAttribute("href")).toBe("/products/wallets");
    });
    (0, vitest_1.test)("accessories click is rendered", () => {
        (0, react_1.render)(<react_redux_1.Provider store={store_1.store}>
        <react_router_dom_1.BrowserRouter>
          <Navbar_1.default />
        </react_router_dom_1.BrowserRouter>
      </react_redux_1.Provider>);
        const link = react_1.screen.getByRole("link", { name: "ACCESSORIES" });
        (0, globals_1.expect)(link.getAttribute("href")).toBe("/products/accessories");
    });
});
