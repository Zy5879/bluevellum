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
    window.location.reload();
  };

  if (error) {
    if ("data" in error) {
      userLogOut();
    }
  }

  // console.log(data);

  const cartQuantity = data?.cart?.items.reduce((acc, val) => acc + val.qty, 0);
  const checkQuant = cartQuantity === 0 ? "" : cartQuantity;

  const linkStyles = disabled ? "pointer-events-none" : "pointer-events-auto";

  // const cartQuantity = data?.cart.reduce((acc, val) => {
  //   const quantity = val.leatherId.reduce((itemQty, leatherItem) => {
  //     return itemQty + leatherItem.qty;
  //   }, 0);
  //   return acc + quantity;
  // }, 0);

  // const updatedCart = cartQuantity === 0 ? undefined : cartQuantity;

  // console.log(
  //   data?.cart.reduce((acc, val) => {
  //     const cartQty = val.leatherId.reduce((itemQty, leatherItem) => {
  //       return itemQty + leatherItem.qty;
  //     }, 0);
  //     return acc + cartQty;
  //   }, 0)
  // );

  // const list = data?.cart.map((item) => {
  //   return item.leatherId.map((leatherItem) => {
  //     const name = leatherItem.name;
  //     const cost = leatherItem.cost;
  //     const type = leatherItem.type;
  //     const category = leatherItem.category;
  //     const inventory = leatherItem.inventory;
  //     const img = leatherItem.img;
  //     const qty = leatherItem.qty;
  //     const id = leatherItem.id;

  //     console.log(id);
  //     return leatherItem;
  //   });
  // });

  // console.log(list);
  // console.log(list?.map((item) => item.map((item) => item.name)));

  // console.log(data?.map((item) => item.leatherId));
  // console.log(data.map());
  // console.log(data?.cart);
  // console.log(data?.cart.map((item) => item.leatherId.qty));

  // console.log(data.map((item) => item.name));

  // console.log(data?.cart.leatherId.map((item) => item));

  // if (error) {
  //   if ("data" in error) {
  //     userLogOut();
  //   }
  // }

  // const list = data?.cart;

  // const leather = list.leather.name;
  // console.log(leather);
  // const cartQuantity = data?.cart.reduce((acc, val) => acc + val.qty, 0);
  // console.log(cartQuantity);
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

  // const userLogOut = () => {
  //   dispatch(logout);
  //   window.localStorage.clear();
  //   window.location.reload();
  //   navigate("/");
  // };

  useEffect(() => {
    dispatch(setCart({ shoppingcart: data?.cart?.items }));
  }, [data]);

  // dispatch(setCart({ shoppingcart: cartData }));

  // dispatch(setCart({ shoppingcart: data }));

  // useEffect(() => {
  //   // let subscribed = false;
  //   const getUserCart = async () => {
  //     if (user?.token) {
  //       try {
  //         const response = await homeService.getUserCart();
  //         dispatch(setCart({ shoppingcart: response }));
  //         console.log(response);
  //         return response;
  //       } catch (error) {
  //         return;
  //       }
  //     } else {
  //       return;
  //     }
  //   };

  //   void getUserCart();

  //   // return () => {
  //   //   subscribed = true;
  //   // };
  // }, [dispatch]);

  return (
    <nav className="bg-black w-full backdrop-filter backdrop-blur-lg bg-opacity-20 top-0 z-[1] fixed border-gray-200 text-black dark:bg-black text-white">
      <div className="max-w-screen-2xl sticky flex flex-wrap items-center justify-between p-4">
        <h1 className="text-3l text-white font-semibold">
          <a href="/">Blue Vellum</a>
        </h1>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
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
          className={`w-full md:block md:w-auto ${open ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col md:text-sm p-4 gap-3 font-medium md:p-0 mt-4 border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0  md:dark:bg-black dark:border-gray-700 transition-all duration-500 ease-in">
            <NavLink
              className="block py-2 pl-3 pr-5 text-white hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent rounded md:bg-transparent md:p-0 dark:text-white "
              // aria-current="page"
              to="/"
              onClick={() => setOpen(false)}
            >
              HOME
            </NavLink>
            <NavLink
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/products/bags"
              onClick={() => setOpen(false)}
            >
              BAGS
            </NavLink>
            <NavLink
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/products/wallets"
              onClick={() => setOpen(false)}
            >
              WALLETS
            </NavLink>
            <NavLink
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/products/accessories"
              onClick={() => setOpen(false)}
            >
              ACCESSORIES
            </NavLink>
            {/* <NavLink
              className="pointer-events-none block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/products/customs"
              onClick={() => setOpen(false)}
            >
              CUSTOMS
            </NavLink> */}
            <NavLink
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/cart"
              onClick={() => setOpen(false)}
            >
              CART
              {shoppingcart ? checkQuant : null}
            </NavLink>
            <NavLink
              className={`block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${linkStyles}`}
              to="/login"
              onClick={() => setOpen(false)}
            >
              {user ? `HELLO ${user.firstname}`.toUpperCase() : "LOGIN"}
            </NavLink>
            <li className="block py-2 pl-3 pr-4  hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              {user && <button onClick={userLogOut}>LOG OUT</button>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
