import mongoose from "mongoose";
import { CartItems } from "../types";
import { leatherSchema } from "./leather";

export const cartSchema = new mongoose.Schema<CartItems>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    items: [leatherSchema],
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

const Cart = mongoose.model<CartItems>("Cart", cartSchema);

export default Cart;
