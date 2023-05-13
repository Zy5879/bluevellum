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
          className="bg-black mt-3 hover:bg-black text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
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

    // if (currentData.cart.length === 0) {
    //   return (
    //     <div className="h-screen flex flex-col items-center justify-center">
    //       <span>YOUR CART IS EMPTY! SHOP NPW</span>
    //       <button onClick={() => navigate("/products/bags")}>SHOP</button>
    //     </div>
    //   );
    // }

    // const stripeData = currentData.cart.map((item) => {
    //   return item.leatherId;
    // });

    if (!currentData.cart || currentData.cart?.items.length === 0) {
      return (
        <div className="h-screen flex flex-col items-center justify-center">
          <span>YOUR CART IS EMPTY! SHOP NPW</span>
          <button onClick={() => navigate("/products/bags")}>SHOP</button>
        </div>
      );
    }

    // const handleDeleteItem = async (uniqueId: string) => {
    //   try {
    //     await deleteFromCart(uniqueId);
    //   } catch (error) {
    //     console.log("there is an error");
    //   }
    // };

    const result = currentData.cart?.items.map((item) => {
      // console.log(item.id);
      return (
        <div key={item.uniqueId}>
          <div>
            <img src={item.img} alt={item.name} />
          </div>
          <div className="flex flex-col">
            <span>{item.name}</span>
            <span>{item.cost}</span>
            <span>{item.qty}</span>
          </div>
          <div className="flex flex-col">
            <button onClick={() => void addToCart({ items: { ...item } })}>
              +
            </button>
            <button onClick={() => void updateCart({ items: { ...item } })}>
              -
            </button>
            <button onClick={() => void deleteFromCart({ ...item })}>
              REMOVE ITEM
            </button>
          </div>
        </div>
      );
    });

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
      <>
        <div>{result}</div>
        <div>
          {currentData.cart && (
            <button onClick={() => void checkout(currentData.cart?.items)}>
              PAY NOW
            </button>
          )}
        </div>
      </>
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
        <span>SIGN IN TO SEE YOUR CART</span>
        <button onClick={() => navigate("/login")}>LOGIN</button>
      </div>
    );
  }
  return null;
}

export default Cart;
