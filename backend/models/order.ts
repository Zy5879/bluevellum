import mongoose from "mongoose";
import { IOrder } from "../types";

const orderSchema = new mongoose.Schema<IOrder>(
  {
    customId: { type: String, require: true },
    customerId: { type: String, require: true },
    paymentIntentId: { type: String, require: true },
    products: [
      {
        id: { type: String, require: true },
        uniqueId: { type: String, require: true },
        name: { type: String, require: true },
        type: { type: String, require: true },
        category: { type: String, require: true },
        inventory: { type: Number },
        img: { type: String, require: true },
        qty: { type: Number },
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
