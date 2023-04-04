import Home from "./Home";
import Customs from "./Customs";
import Cart from "./Cart";
import Wallets from "./Wallets";
import Accessories from "./Accessories";
import AllProducts from "./AllProducts";
import { Route, Routes } from "react-router-dom";

function RouteProvider() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/wallets" element={<Wallets />} />
      <Route path="/products/accessories" element={<Accessories />} />
      <Route path="/products/customs" element={<Customs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/allProducts" element={<AllProducts />} />
    </Routes>
  );
}

export default RouteProvider;
