import { NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { logout, setUser, setCart } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";
import { LoginResponse } from "../types/type";
import { useNavigate } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useGetCartQuery } from "../redux/features/authApi";

function Navbar() {
  const { user, shoppingcart } = useAppSelector((state) => state.authUser);
  const { data, error } = useGetCartQuery(user ?? skipToken);
  const [open, setOpen] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogOut = () => {
    dispatch(logout);
    navigate("/");
    window.localStorage.clear();
    window.location.href = "/";
  };

  if (error) {
    if ("data" in error) {
      userLogOut();
    }
  }

  const cartQuantity = data?.cart?.items.reduce((acc, val) => acc + val.qty, 0);
  const checkQuant = cartQuantity === 0 ? "" : cartQuantity;

  const linkStyles = disabled ? "pointer-events-none" : "pointer-events-auto";

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedInUser");

    if (loggedUser) {
      const user = JSON.parse(loggedUser) as LoginResponse;
      dispatch(setUser({ user: user, token: user.token }));
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [data]);

  useEffect(() => {
    dispatch(setCart({ shoppingcart: data?.cart?.items }));
  }, [data]);

  return (
    <nav className="bg-black w-full backdrop-filter backdrop-blur-lg bg-opacity-20 top-0 z-[1] fixed border-gray-200 text-black dark:bg-black text-white">
      <div className="max-w-screen-2xl sticky flex flex-wrap items-center justify-between p-4">
        <h1 className="text-white font-bold text-title">
          <a href="/">Blue Vellum</a>
        </h1>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6 "
            aria-hidden="true"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full md:block text-nav md:w-auto ${
            open ? "block text-nav " : "hidden"
          }`}
        >
          <ul className="flex flex-col md:text-sm p-4 gap-3 font-medium md:p-0 mt-4 border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0  md:dark:bg-black dark:border-gray-700  transition-all duration-500 ease-in">
            <NavLink
              className="block text-nav py-2 pl-3 pr-5 text-white hover:bg-gray-200 md:hover:text-white md:hover:bg-transparent rounded md:bg-transparent md:p-0 dark:text-white md:dark:hover:bg-transparent dark:hover:bg-gray-700  "
              // aria-current="page"
              to="/"
              onClick={() => setOpen(false)}
            >
              HOME
            </NavLink>
            <NavLink
              className="block text-nav py-2 pl-3 pr-4 text-white rounded hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/products/bags"
              onClick={() => setOpen(false)}
            >
              BAGS
            </NavLink>
            <NavLink
              className="block text-nav py-2 pl-3 pr-4 text-white rounded hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/products/wallets"
              onClick={() => setOpen(false)}
            >
              WALLETS
            </NavLink>
            <NavLink
              className="block text-nav py-2 pl-3 pr-4 text-white rounded hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/products/accessories"
              onClick={() => setOpen(false)}
            >
              ACCESSORIES
            </NavLink>
            <NavLink
              className="block text-nav py-2 pl-3 pr-4 text-white rounded hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/cart"
              onClick={() => setOpen(false)}
            >
              CART:
              {""} {shoppingcart ? checkQuant : null}
            </NavLink>
            <NavLink
              className={`block text-nav py-2 pl-3 pr-4 text-white rounded hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${linkStyles}`}
              to="/login"
              onClick={() => setOpen(false)}
            >
              {user ? `HELLO ${user.firstname}`.toUpperCase() : "LOGIN"}
            </NavLink>
            <li className="block text-nav py-2 pl-3 pr-4  hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              {user && <button onClick={userLogOut}>LOG OUT</button>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
