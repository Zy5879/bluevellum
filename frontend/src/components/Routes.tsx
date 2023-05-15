import Home from "./Home";
import Customs from "./Customs";
import Cart from "./Cart";
import Wallets from "./Wallets";
import Accessories from "./Accessories";
import AllProducts from "./AllProducts";
import NotFound from "./NotFound";
import Bags from "./Bags";
import RefundPolicy from "./RefundPolicy";
import ShippingAndDelivery from "./S&D";
import ProductById from "./ProductById";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";
import CheckOutSuccess from "./CheckOutSucess";

// type RouteProps = {
//   handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
//   email: string;
//   password: string;
// };

function RouteProvider() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/wallets" element={<Wallets />} />
      <Route path="/products/accessories" element={<Accessories />} />
      <Route path="/products/customs" element={<Customs />} />
      <Route path="/products/bags" element={<Bags />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/allProducts" element={<AllProducts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/policy/refund-policy" element={<RefundPolicy />} />
      <Route
        path="/policy/shipping-delivery"
        element={<ShippingAndDelivery />}
      />
      <Route path="/products/item/:id" element={<ProductById />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/checkout-success/:id" element={<CheckOutSuccess />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RouteProvider;
