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
// import { LeatherInfo, CartItems } from "../types/type";
// import { LeatherInfo } from "../types/type";
// import { LeatherInfo } from "../types/type";

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

  const navigate = useNavigate();
  if (isLoading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <span>LOADING.....</span>
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

    if (!currentData.cart || currentData.cart?.items.length === 0) {
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
        <div
          key={item.uniqueId}
          className="rounded-lg mt-20 h-screen md:w-full"
        >
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md md:flex md:justify-start">
            <img
              src={item.img}
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="md:ml-4 md:flex md:w-full md:justify-between lg:gap-5">
              <div key={item.uniqueId} className="mt-5 sm:mt-0">
                <h2 className="text-sm font-bold text-gray-900">{item.name}</h2>
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
                  {/* <input
                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    value="2"
                    min="1"
                  /> */}
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
        //   </div>
        // </div>
      );
    });

    // const handleDeleteItem = async (uniqueId: string) => {
    //   try {
    //     await deleteFromCart(uniqueId);
    //   } catch (error) {
    //     console.log("there is an error");
    //   }
    // };

    // const result = currentData.cart?.items.map((item) => {
    //   return (
    //     <div className="grid" key={item.uniqueId}>
    //       <div>
    //         <img src={item.img} alt={item.name} className="w-10 h-10" />
    //       </div>
    //       <div className="flex flex-col">
    //         <span>{item.name}</span>
    //         <span>{item.cost}</span>
    //         <span>{item.qty}</span>
    //       </div>
    //       <div className=" bg-black text-white">
    //         <div>
    //           <button onClick={() => void addToCart({ items: { ...item } })}>
    //             +
    //           </button>
    //         </div>
    //         <div>
    //           <button onClick={() => void updateCart({ items: { ...item } })}>
    //             -
    //           </button>
    //         </div>
    //         <div>
    //           <button onClick={() => void deleteFromCart({ ...item })}>
    //             REMOVE ITEM
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // });

    // const result = currentData.cart.map((item) => {
    //   return item.leatherId.map((leatherItem) => {
    //     console.log(item.productId);
    //     return (
    //       <div key={item.productId}>
    //         <div>
    //           <img src={leatherItem.img} alt={leatherItem.name} />
    //         </div>
    //         <div className="flex flex-col">
    //           <span>{leatherItem.name}</span>
    //           <span>{leatherItem.cost}</span>
    //           <span>{leatherItem.qty}</span>
    //         </div>
    //         <div className="flex flex-col">
    //           <button
    //             onClick={() =>
    //               void addToCart({
    //                 leatherId: { ...leatherItem, id: item.productId },
    //               })
    //             }
    //           >
    //             +
    //           </button>
    //           <button
    //             disabled={leatherItem.qty === 1}
    //             onClick={() =>
    //               void updateCart({
    //                 leatherId: { ...leatherItem, id: item.productId },
    //               })
    //             }
    //           >
    //             -
    //           </button>
    //           <button
    //             onClick={() =>
    //               void deleteFromCart({
    //                 leatherId: { ...leatherItem, id: item.productId },
    //               })
    //             }
    //           >
    //             DELETE
    //           </button>
    //         </div>
    //         <button onClick={() => void checkout({})}>PAY NOW</button>
    //       </div>
    //     );
    //   });
    // });

    return (
      <main className="p-5 lg:flex lg:justify-between">
        <div className="">{result}</div>
        {currentData.cart && (
          <>
            <div className="h-full rounded-lg border bg-white p-6 shadow-md md:mt-20 md:w-1/3">
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
    // console.log(currentData.cart.map((item) => item.leatherId));
    // const productData = currentData.cart.map((item) => item.leatherId);
    // console.log(productData]);

    // console.log(productData.forEach(item => item.name && item.cost && ite))

    // const handleCheckout = () => {
    //   console
    // };

    // const handleClick = async () => {
    //   const res = await fetch("http://localhost:3000/stripe/checkout", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const body = await res.json();
    //   window.location.href = body.url;
    // };

    // console.log(Object.values(currentData));
    // const values = Object.values(currentData);
    // console.log(values[4]);

    // const result = currentData.cart.map((item) => {
    //   return (
    //     <div key={item.leatherId.id}>
    //       <div>
    //         <img
    //           src={item.leatherId.img}
    //           alt={item.leatherId.img}
    //           className="w-8"
    //         />
    //       </div>
    //       <div className="flex flex-col">
    //         <span>{item.leatherId.name}</span>
    //         <span>{item.leatherId.cost}</span>
    //         <span>{item.qty}</span>
    //       </div>
    //   <div className="flex flex-col">
    //     <button
    //       onClick={() => void addToCart({ leatherId: item.leatherId.id })}
    //     >
    //       +
    //     </button>
    //     <button
    //       disabled={item.qty === 1}
    //       onClick={() => void updateCart({ leatherId: item.leatherId.id })}
    //     >
    //       -
    //     </button>
    //     <button
    //       onClick={() =>
    //         void deleteFromCart({ leatherId: item.leatherId.id })
    //       }
    //     >
    //       DELETE
    //     </button>
    //   </div>
    //   <button>PAY NOW</button>
    // </div>
    //   );
    // });

    // const quantity = currentData.cart.map(item => item.qty);
    // currentData.map(item => console.log(item));
    // const result = currentData.cart
    //   .flatMap((item) => item.leatherId)
    //   .map((item) => (
    //     <div key={item.id}>
    //       <img src={item.img} alt={item.name} />
    //       <div>
    //         <p>{item.name}</p>
    //         <p>{item.cost}</p>
    //       </div>
    //       <div></div>
    //     </div>
    //   ));

    // return (
    //   <div className="h-screen flex flex-col items-center justify-center">
    //     <span>{result}</span>
    //   </div>
    // );
    // // item.forEach((items) => console.log(items.cost));
    // console.log(shop);
  }

  if (!currentData) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <span className="font-bold text-xl">SIGN IN TO SEE YOUR CART</span>
        <button
          className="cursor-pointer bg-black text-white font-bold py-2 px-4 rounded-md mb-5 focus:outline-none focus:shadow-outline enabled:hover:bg-white enabled:hover:text-black enabled:border enabled:border-black enabled:duration-500 enabled:ease-in-out"
          onClick={() => navigate("/login")}
        >
          LOGIN
        </button>
      </div>
    );
  }
  return null;
}

export default Cart;
