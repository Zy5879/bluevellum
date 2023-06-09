"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const App_1 = __importDefault(require("./App"));
require("./index.css");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const store_1 = require("./redux/store");
client_1.default.createRoot(document.getElementById("root")).render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store_1.store}>
      <react_router_dom_1.BrowserRouter>
        <App_1.default />
      </react_router_dom_1.BrowserRouter>
    </react_redux_1.Provider>
  </react_1.default.StrictMode>);
