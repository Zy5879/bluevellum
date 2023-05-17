import mongoose from "mongoose";
import { IOrder } from "../types";

const orderSchema = new mongoose.Schema<IOrder>(
  {
    customId: { type: String, require: true },
    customerId: { type: String, require: true },
    paymentIntentId: { type: String, require: true },
    products: [
      {
        name: { type: String, require: true },
      },
    ],
    subtotal: { type: Number, require: true },
    total: { type: Number, required: true },
    shipping: { type: Object },
    delivery_status: { type: String, default: "pending" },
    payment_status: { type: String, require: true },
  },
  { timestamps: true }
);

const Order = mongoose.model<IOrder>("Order", orderSchema);

export default Order;
