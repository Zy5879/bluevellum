import Home from "./Home";
import Customs from "./Customs";
import Cart from "./Cart";
import Wallets from "./Wallets";
import Accessories from "./Accessories";
import AllProducts from "./AllProducts";
import NotFound from "./NotFound";
import Bags from "./Bags";
import { Route, Routes } from "react-router-dom";

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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RouteProvider;
