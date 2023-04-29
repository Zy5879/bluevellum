import mongoose from "mongoose";
import { CartItems, Carts } from "../types";

export const cartSchema = new mongoose.Schema<Carts>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    cart: {
      leatherId: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Leather",
        },
      ],
      qty: {
        type: Number,
        default: 1,
      },
    },
  },
  // items: [
  //   {
  //     leatherId: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Leather"
  //     },
  //   {
  //     qty: {
  //       type: Number,
  //       default: 1
  //     }
  //   },
  // },
  // ],
  //   cart: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Leather",
  //     },
  //     qty: {
  //       default: 1,
  //       type: Number,
  //     },
  //   ],
  // },
  { timestamps: true }
);

cartSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// const Cart = mongoose.model<Leather>("Cart", cartSchema);
const Cart = mongoose.model<Carts & CartItems>("Cart", cartSchema);

export default Cart;
