import { NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { logout, setUser, setCart } from "../redux/features/authSlice";
import homeService from "../services/home";
import { useDispatch } from "react-redux";
import { LoginResponse } from "../types/type";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, shoppingcart } = useAppSelector((state) => state.authUser);
  const navigate = useNavigate();
  const cartQuantity = shoppingcart?.cart.reduce(
    (acc, val) => acc + val.qty,
    0
  );
  console.log(cartQuantity);

  const dispatch = useDispatch();
  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedInUser");
    if (loggedUser) {
      const user = JSON.parse(loggedUser) as LoginResponse;
      dispatch(setUser({ user: user.data, token: user.data.token }));
      homeService.setToken(user.data.token);
      // const { data: userCart } = useGetShoppingCartQuery();
      // console.log(userCart);
    }
  }, [dispatch]);

  const userLogOut = () => {
    dispatch(logout);
    window.localStorage.clear();
    window.location.reload();
    navigate("/");
  };

  return (
    <nav>
      <h1>Blue Vellum</h1>
      <ul>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/products/bags">BAGS</NavLink>
        <NavLink to="/products/wallets">WALLETS</NavLink>
        <NavLink to="/products/accessories">ACCESSORIES</NavLink>
        <NavLink to="/products/customs">CUSTOMS</NavLink>
        <NavLink to="/cart">CART {shoppingcart ? cartQuantity : null}</NavLink>
        <NavLink to="/login">
          {user ? `HELLO ${user.firstname}`.toUpperCase() : "LOGIN"}
        </NavLink>
        {user && <button onClick={userLogOut}>LOG OUT</button>}
      </ul>
    </nav>
  );
}

export default Navbar;
