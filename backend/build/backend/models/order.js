"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
const Order = mongoose_1.default.model("Order", orderSchema);
exports.default = Order;
