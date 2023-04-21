import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <h1>Blue Vellum</h1>
      <ul>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/products/bags">BAGS</NavLink>
        <NavLink to="/products/wallets">WALLETS</NavLink>
        <NavLink to="/products/accessories">ACCESSORIES</NavLink>
        <NavLink to="/products/customs">CUSTOMS</NavLink>
        <NavLink to="/cart">CART</NavLink>
        <NavLink to="/login">LOGIN</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
