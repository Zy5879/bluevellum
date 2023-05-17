import {
  useGetCartQuery,
  useUpdateCartMutation,
  useAddToCartMutation,
  useDeleteFromCartMutation,
} from "../redux/features/authApi";
import { useAppSelector } from "../redux/hooks";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useNavigate } from "react-router-dom";
import { useCheckoutMutation } from "../redux/features/stripeApi";
import { useEffect } from "react";

function Cart() {
  const { user } = useAppSelector((state) => state.authUser);
  const { currentData, isLoading } = useGetCartQuery(user ?? skipToken);
  const [updateCart] = useUpdateCartMutation();
  const [addToCart] = useAddToCartMutation();
  const [deleteFromCart] = useDeleteFromCartMutation();
  const [checkout, { data }] = useCheckoutMutation();

  useEffect(() => {
    if (data) {
      window.location.href = data.url;
    }
  }, [data]);

  // console.log(currentData);

  const navigate = useNavigate();
  if (isLoading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-gray-200 border-8 h-20 w-20"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <span className="font-bold text-lg">SIGN IN TO SEE YOUR CART</span>
        <button
          className="bg-black mt-6 hover:bg-black text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          onClick={() => navigate("/login")}
        >
          LOGIN
        </button>
      </div>
    );
  }

  if (currentData && currentData.cart) {
    // const list = currentData?.cart.map((item) => {

    //   return item.leatherId.map((leatherItem) => {
    //     // const name = leatherItem.name;
    //     // const cost = leatherItem.cost;
    //     // const img = leatherItem.img;
    //     // const qty = leatherItem.qty;
    //     // const id = leatherItem.id;

    //     return leatherItem;
    //   });
    // });

    // console.log(currentData);

    if (!currentData.cart.items || currentData.cart?.items.length === 0) {
      console.log("This is true");
      return (
        <div className="h-screen flex flex-col items-center justify-center">
          <span className="font-bold text-xl">
            YOUR CART IS EMPTY! SHOP NOW
          </span>
          <button
            className="cursor-pointer mt-6 bg-black text-white font-bold py-2 px-4 rounded-md mb-5 focus:outline-none focus:shadow-outline enabled:hover:bg-white enabled:hover:text-black enabled:border enabled:border-black enabled:duration-500 enabled:ease-in-out"
            onClick={() => navigate("/products/bags")}
          >
            SHOP
          </button>
        </div>
      );
    }

    const subTotal = currentData.cart?.items.reduce(
      (acc, val) => acc + val.cost * val.qty,
      0
    );

    const result = currentData.cart?.items.map((item) => {
      return (
        <div>
          <div
            key={item.uniqueId}
            className="rounded-lg h-screen mt-20 md:w-full"
          >
            <div className="mb-6 rounded-lg bg-white p-6 shadow-md md:flex md:justify-start">
              <img
                src={item.img}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="md:ml-4 md:flex md:w-full md:justify-between lg:gap-5">
                <div key={item.uniqueId} className="mt-5 sm:mt-0">
                  <h2 className="text-sm font-bold text-gray-900">
                    {item.name}
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">{item.qty}</p>
                </div>
                <div className="mt-4 flex justify-between md:space-y-6 md:mt-0 md:block md:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <button
                      disabled={item.qty === 1}
                      onClick={() => void updateCart({ items: { ...item } })}
                      className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span className="w-8 text-center">{item.qty}</span>
                    <button
                      onClick={() => void addToCart({ items: { ...item } })}
                      className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">${item.cost * item.qty}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      onClick={() => void deleteFromCart({ ...item })}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <main className="p-5 md:h-screen lg:flex lg:justify-between">
        <div className="">{result}</div>
        {currentData.cart && (
          <>
            <div className="rounded-lg border bg-white p-6 shadow-md md:mt-20 md:w-1/3 lg: h-1/4">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700 font-bold">SUBTOTAL</p>
                <p className="text-gray-700">${subTotal}</p>
              </div>
              <hr className="my-4" />
              <button
                onClick={() => void checkout(currentData.cart?.items)}
                className="w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
              >
                Check out
              </button>
            </div>
          </>
        )}
      </main>
    );
  }

  if (!currentData?.cart) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <span className="font-bold text-xl"> YOUR CART IS EMPTY! SHOP NOW</span>
        <button
          className="cursor-pointer mt-6 bg-black text-white font-bold py-2 px-4 rounded-md mb-5 focus:outline-none focus:shadow-outline enabled:hover:bg-white enabled:hover:text-black enabled:border enabled:border-black enabled:duration-500 enabled:ease-in-out"
          onClick={() => navigate("/products/bags")}
        >
          SHOP
        </button>
      </div>
    );
  }
  return null;
}

export default Cart;
