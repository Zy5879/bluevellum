import { NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { User, Token } from "../types/type";
// import homeService from "../services/home";
// import loginService from "../services/login";
type NavbarProps = {
  quantity: number | null;
  user: string | undefined;
};
function Navbar(props: NavbarProps) {
  // const [cart, setCart] = useState<User | null>();
  // const [user, setUser] = useState<string | null>();
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // useEffect(() => {
  //   const homeLoad = async () => {
  //     const intialCart = await homeService.getCart();
  //     setCart(intialCart);
  //   };
  //   void homeLoad();
  // }, []);
  // useEffect(() => {
  //   const loggedUser = window.localStorage.getItem("loggedInUser");
  //   if (loggedUser) {
  //     const user = JSON.parse(loggedUser) as Token;
  //     setUser(user.firstname);
  //     homeService.setToken(user.token);
  //   }
  // }, []);

  // if (!cart) {
  //   return null;
  // }

  // const cartQty = cart.cart.reduce((acc, val) => acc + val.qty, 0);
  // const quantity = cartQty > 0 ? cartQty : "";

  // async function handleSumbit(e: Event) {
  //   try {
  //     e.preventDefault();
  //     const user = await loginService.login({ email, password });
  //     window.localStorage.setItem("loggedInUser", JSON.stringify(user));
  //     homeService.setToken(user.token);
  //     setUser(user.firstname);
  //   } catch (exception) {
  //     console.log("Wrong Credentials");
  //   }
  // }

  // function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
  //   setEmail(e.target.value);
  // }
  // function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
  //   setPassword(e.target.value);
  // }

  return (
    <nav>
      <h1>Blue Vellum</h1>
      <ul>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/products/bags">BAGS</NavLink>
        <NavLink to="/products/wallets">WALLETS</NavLink>
        <NavLink to="/products/accessories">ACCESSORIES</NavLink>
        <NavLink to="/products/customs">CUSTOMS</NavLink>
        <NavLink to="/cart">CART {props.quantity}</NavLink>
        <NavLink to="/login">
          {!props.user ? "Login" : `Welcome Back ${props.user}`}
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
