import mongoose from "mongoose";
import { Carts } from "../types";

const cartSchema = new mongoose.Schema<Carts>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    cart: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Leather",
        },
      },
    ],
    total: {
      default: 0,
      type: Number,
    },
  },
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
const Cart = mongoose.model<Carts>("Cart", cartSchema);

export default Cart;
