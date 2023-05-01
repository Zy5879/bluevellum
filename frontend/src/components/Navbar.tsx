import { NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { logout, setUser } from "../redux/features/authSlice";
import homeService from "../services/home";
import { useDispatch } from "react-redux";
import { LoginResponse } from "../types/type";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, shoppingcart } = useAppSelector((state) => state.authUser);
  const [open, setOpen] = useState<boolean>(false);
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
    }
  }, [dispatch]);

  const userLogOut = () => {
    dispatch(logout);
    window.localStorage.clear();
    window.location.reload();
    navigate("/");
  };

  return (
    <nav className="bg-white border-gray-200 text-black dark:bg-black text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
        <h1 className="text-3l text-black font-semibold">Blue Vellum</h1>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
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
          className={`w-full md:block md:w-auto ${open ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col p-4 gap-3 font-medium md:p-0 mt-4 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white md:dark:bg-black dark:border-gray-700 transition-all duration-500 ease-in">
            <NavLink
              className="block py-2 pl-3 pr-5 text-black hover:bg-gray-200 md:hover:bg-transparent rounded md:bg-transparent md:p-0 dark:text-white md:hover:text-blue-700"
              // aria-current="page"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/products/bags"
            >
              BAGS
            </NavLink>
            <NavLink
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/products/wallets"
            >
              WALLETS
            </NavLink>
            <NavLink
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/products/accessories"
            >
              ACCESSORIES
            </NavLink>
            <NavLink
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/products/customs"
            >
              CUSTOMS
            </NavLink>
            <NavLink
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/cart"
            >
              CART {shoppingcart ? cartQuantity : null}
            </NavLink>
            <NavLink
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/login"
            >
              {user ? `HELLO ${user.firstname}`.toUpperCase() : "LOGIN"}
            </NavLink>
            {user && <button onClick={userLogOut}>LOG OUT</button>}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
