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
}, { timestamps: true });
const Order = mongoose_1.default.model("Order", orderSchema);
exports.default = Order;
