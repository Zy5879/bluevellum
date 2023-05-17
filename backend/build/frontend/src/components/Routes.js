"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Home_1 = __importDefault(require("./Home"));
const Customs_1 = __importDefault(require("./Customs"));
const Cart_1 = __importDefault(require("./Cart"));
const Wallets_1 = __importDefault(require("./Wallets"));
const Accessories_1 = __importDefault(require("./Accessories"));
const AllProducts_1 = __importDefault(require("./AllProducts"));
const NotFound_1 = __importDefault(require("./NotFound"));
const Bags_1 = __importDefault(require("./Bags"));
const RefundPolicy_1 = __importDefault(require("./RefundPolicy"));
const S_D_1 = __importDefault(require("./S&D"));
const ProductById_1 = __importDefault(require("./ProductById"));
const react_router_dom_1 = require("react-router-dom");
const Login_1 = __importDefault(require("./Login"));
const Signup_1 = __importDefault(require("./Signup"));
const CheckOutSucess_1 = __importDefault(require("./CheckOutSucess"));
// type RouteProps = {
//   handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
//   email: string;
//   password: string;
// };
function RouteProvider() {
    return (<react_router_dom_1.Routes>
      <react_router_dom_1.Route path="/" element={<Home_1.default />}/>
      <react_router_dom_1.Route path="/products/wallets" element={<Wallets_1.default />}/>
      <react_router_dom_1.Route path="/products/accessories" element={<Accessories_1.default />}/>
      <react_router_dom_1.Route path="/products/customs" element={<Customs_1.default />}/>
      <react_router_dom_1.Route path="/products/bags" element={<Bags_1.default />}/>
      <react_router_dom_1.Route path="/cart" element={<Cart_1.default />}/>
      <react_router_dom_1.Route path="/products/allProducts" element={<AllProducts_1.default />}/>
      <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
      <react_router_dom_1.Route path="/policy/refund-policy" element={<RefundPolicy_1.default />}/>
      <react_router_dom_1.Route path="/policy/shipping-delivery" element={<S_D_1.default />}/>
      <react_router_dom_1.Route path="/products/item/:id" element={<ProductById_1.default />}/>
      <react_router_dom_1.Route path="/signup" element={<Signup_1.default />}/>
      <react_router_dom_1.Route path="/checkout-success/:id" element={<CheckOutSucess_1.default />}/>
      <react_router_dom_1.Route path="*" element={<NotFound_1.default />}/>
    </react_router_dom_1.Routes>);
}
exports.default = RouteProvider;
