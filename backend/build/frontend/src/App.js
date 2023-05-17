"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Navbar_1 = __importDefault(require("./components/Navbar"));
const Routes_1 = __importDefault(require("./components/Routes"));
const Footer_1 = __importDefault(require("./components/Footer"));
function App() {
    return (<div className="flex flex-col min-h-screen">
      <Navbar_1.default />
      <Routes_1.default />
      <Footer_1.default />
    </div>);
}
exports.default = App;
