import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { User, Token } from "../types/type";
import homeService from "../services/home";
function Navbar() {
  const [cart, setCart] = useState<User | null>();
  const [user, setUser] = useState<Token | null>();

  useEffect(() => {
    const homeLoad = async () => {
      const intialCart = await homeService.getCart();
      setCart(intialCart);
    };
    void homeLoad();
  }, []);
  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedInUser");
    if (loggedUser) {
      const user: Token = JSON.parse(loggedUser) as Token;
      setUser(user);
      homeService.setToken(user.token);
    }
  }, []);

  if (!cart) {
    return null;
  }

  const cartQty = cart.cart.reduce((acc, val) => acc + val.qty, 0);
  console.log(user);
  return (
    <nav>
      <h1>Blue Vellum</h1>
      <ul>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/products/bags">BAGS</NavLink>
        <NavLink to="/products/wallets">WALLETS</NavLink>
        <NavLink to="/products/accessories">ACCESSORIES</NavLink>
        <NavLink to="/products/customs">CUSTOMS</NavLink>
        <NavLink to="/cart">CART {cartQty}</NavLink>
        <NavLink to="/login">LOGIN</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
