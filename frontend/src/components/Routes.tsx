import Home from "./Home";
import Customs from "./Customs";
import Cart from "./Cart";
import Wallets from "./Wallets";
import Accessories from "./Accessories";
import AllProducts from "./AllProducts";
import NotFound from "./NotFound";
import Bags from "./Bags";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";

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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RouteProvider;
