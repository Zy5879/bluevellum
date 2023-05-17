"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const globals_1 = require("@jest/globals");
const Home_1 = __importDefault(require("../components/Home"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const store_1 = require("../redux/store");
(0, vitest_1.describe)("Home", () => {
    (0, vitest_1.test)("home page is loaded", () => {
        (0, react_1.render)(<react_redux_1.Provider store={store_1.store}>
        <react_router_dom_1.BrowserRouter>
          <Home_1.default />
        </react_router_dom_1.BrowserRouter>
      </react_redux_1.Provider>);
        const element = react_1.screen.getByText("HAND CRAFTED LEATHER GOODS");
        (0, globals_1.expect)(element).toBeDefined();
    });
    (0, vitest_1.test)("shop now click is rendered", () => {
        (0, react_1.render)(<react_redux_1.Provider store={store_1.store}>
        <react_router_dom_1.BrowserRouter>
          <Home_1.default />
        </react_router_dom_1.BrowserRouter>
      </react_redux_1.Provider>);
        const link = react_1.screen.getByText("SHOP PRODUCTS");
        react_1.fireEvent.click(link);
        (0, globals_1.expect)(window.location.pathname).toBe("/products/bags");
    });
    (0, vitest_1.test)("bag click is rendered", () => {
        (0, react_1.render)(<react_redux_1.Provider store={store_1.store}>
        <react_router_dom_1.BrowserRouter>
          <Home_1.default />
        </react_router_dom_1.BrowserRouter>
      </react_redux_1.Provider>);
        const link = react_1.screen.getByText("SHOP BAGS");
        react_1.fireEvent.click(link);
        (0, globals_1.expect)(window.location.pathname).toBe("/products/bags");
    });
    (0, vitest_1.test)("wallet click is rendered", () => {
        (0, react_1.render)(<react_redux_1.Provider store={store_1.store}>
        <react_router_dom_1.BrowserRouter>
          <Home_1.default />
        </react_router_dom_1.BrowserRouter>
      </react_redux_1.Provider>);
        const link = react_1.screen.getByText("SHOP WALLETS");
        react_1.fireEvent.click(link);
        (0, globals_1.expect)(window.location.pathname).toBe("/products/wallets");
    });
    (0, vitest_1.test)("accessories click is rendered", () => {
        (0, react_1.render)(<react_redux_1.Provider store={store_1.store}>
        <react_router_dom_1.BrowserRouter>
          <Home_1.default />
        </react_router_dom_1.BrowserRouter>
      </react_redux_1.Provider>);
        const link = react_1.screen.getByText("SHOP ACCESSORIES");
        react_1.fireEvent.click(link);
        (0, globals_1.expect)(window.location.pathname).toBe("/products/accessories");
    });
});
