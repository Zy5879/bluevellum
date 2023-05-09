import {
  useGetCartQuery,
  useUpdateCartMutation,
  useAddToCartMutation,
  useDeleteFromCartMutation,
} from "../redux/features/authApi";
import { useAppSelector } from "../redux/hooks";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useNavigate } from "react-router-dom";
// import { LeatherInfo, CartItems } from "../types/type";
// import { LeatherInfo } from "../types/type";
// import { LeatherInfo } from "../types/type";

function Cart() {
  const { user } = useAppSelector((state) => state.authUser);
  const { currentData, isLoading } = useGetCartQuery(user ?? skipToken);
  const [updateCart] = useUpdateCartMutation();
  const [addToCart] = useAddToCartMutation();
  const [deleteFromCart] = useDeleteFromCartMutation();

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
        <span>SIGN IN TO SEE YOUR CART</span>
        <button onClick={() => navigate("/login")}>LOGIN</button>
      </div>
    );
  }

  if (currentData) {
    console.log(currentData);
    // console.log(Object.values(currentData));
    // const values = Object.values(currentData);
    // console.log(values[4]);

    const result = currentData.cart.map((item) => {
      return (
        <div key={item.leatherId.id}>
          <div>
            <img
              src={item.leatherId.img}
              alt={item.leatherId.img}
              className="w-8"
            />
          </div>
          <div className="flex flex-col">
            <span>{item.leatherId.name}</span>
            <span>{item.leatherId.cost}</span>
            <span>{item.qty}</span>
          </div>
          <div className="flex flex-col">
            <button
              onClick={() => void addToCart({ leatherId: item.leatherId.id })}
            >
              +
            </button>
            <button
              disabled={item.qty === 1}
              onClick={() => void updateCart({ leatherId: item.leatherId.id })}
            >
              -
            </button>
            <button
              onClick={() =>
                void deleteFromCart({ leatherId: item.leatherId.id })
              }
            >
              DELETE
            </button>
          </div>
        </div>
      );
    });

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

    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <span>{result}</span>
      </div>
    );
    // item.forEach((items) => console.log(items.cost));
    // console.log(shop);
  }

  if (!currentData) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <span>YOUR CART IS EMPTY! SHOP NPW</span>
        <button onClick={() => navigate("/products/bags")}>SHOP</button>
      </div>
    );
  }
}

export default Cart;
