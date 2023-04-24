import Navbar from "./components/Navbar";
import RouteProvider from "./components/Routes";
import { useState, useEffect } from "react";
import { User, Token } from "./types/type";
import homeService from "./services/home";
// import loginService from "./services/login";
import "./index.css";
function App() {
  const [cart, setCart] = useState<User | null>();
  const [user, setUser] = useState<string | undefined>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
      const user = JSON.parse(loggedUser) as Token;
      setUser(user.firstname);
      homeService.setToken(user.token);
    }
  }, []);

  if (!cart) {
    return null;
  }

  const cartQty = cart.cart.reduce((acc, val) => acc + val.qty, 0);
  const quantity = cartQty > 0 ? cartQty : null;

  // async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   try {
  //     const user = await loginService.login({ email, password });
  //     window.localStorage.setItem("loggedInUser", JSON.stringify(user));
  //     homeService.setToken(user.token);
  //     setUser(user.firstname);
  //   } catch (exception) {
  //     console.log(exception);
  //   }
  // }

  // function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
  //   setEmail(e.target.value);
  // }
  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  return (
    <>
      <Navbar quantity={quantity} user={user} />
      <RouteProvider
        email={email}
        password={password}
        handlePassword={handlePassword}
        // handleLogin={handleLogin}
        // handleEmail={handleEmail}
      />
    </>
  );
}

export default App;
