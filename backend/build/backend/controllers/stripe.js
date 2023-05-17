"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripeRouter = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const express_1 = require("express");
const stripe_1 = __importDefault(require("stripe"));
const express_2 = __importDefault(require("express"));
const cart_1 = __importDefault(require("../models/cart"));
const user_1 = __importDefault(require("../models/user"));
const order_1 = __importDefault(require("../models/order"));
const stripe = new stripe_1.default(`${process.env.STRIPE_KEY}`, {
    apiVersion: "2022-11-15",
});
exports.stripeRouter = (0, express_1.Router)();
exports.stripeRouter.post("/checkout", express_2.default.json({ type: "application/json" }), (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.body[0].userId;
    const customer = yield stripe.customers.create({
        metadata: {
            userId: userId,
            cart: JSON.stringify(req.body),
        },
    });
    const customerId = customer.id;
    console.log(customerId);
    const line_items = req.body.map((item) => {
        return {
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                    images: [item.img],
                    metadata: {
                        id: item.uniqueId,
                    },
                },
                unit_amount: item.cost * 100,
            },
            quantity: item.qty,
        };
    });
    const session = yield stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        customer: customerId,
        line_items,
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}/checkout-success/${userId}`,
        cancel_url: `${process.env.CLIENT_URL}/cart`,
    });
    res.json({ url: session.url });
})));
//Stripe CLI
const createOrder = (customer, data) => __awaiter(void 0, void 0, void 0, function* () {
    const items = JSON.parse(customer.metadata.cart);
    const newOrder = new order_1.default({
        customId: customer.metadata.customId,
        customerId: data.customer,
        paymentIntentId: data.payment_intent,
        products: items,
        subtotal: data.amount_subtotal,
        total: data.amount_total,
        shipping: data.customer_details,
        payment_status: data.payment_status,
    });
    try {
        const savedOrder = yield newOrder.save();
        const userId = customer.metadata.userId;
        const cart = yield cart_1.default.findOneAndDelete({ userId: userId });
        const user = yield user_1.default.findOneAndUpdate({ cart: cart === null || cart === void 0 ? void 0 : cart._id }, { $pull: { cart: cart === null || cart === void 0 ? void 0 : cart._id } }, { new: true });
        console.log(user);
        console.log("Proccessed Order", savedOrder);
    }
    catch (err) {
        console.log(`${String(err)}`);
    }
});
exports.stripeRouter.post("/webhook", express_2.default.raw({ type: "application/json" }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const webhookSecret = process.env.STRIPE_WEB_HOOK;
    let data;
    let event;
    console.log(req.body);
    if (webhookSecret) {
        const sig = req.headers["stripe-signature"];
        // const payload = req.body as Buffer | string;
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
            console.log(event);
        }
        catch (err) {
            console.log(`Webhook signature verification failed: ${String(err)}`);
            return res.status(400).send("Webhook error");
        }
    }
    if (event) {
        switch (event.type) {
            case "checkout.session.completed":
                try {
                    data = event.data.object;
                    const customer = data.customer;
                    console.log(customer);
                    const customerId = (yield stripe.customers.retrieve(customer));
                    yield createOrder(customerId, data);
                    console.log(customerId);
                    console.log("data:", data);
                }
                catch (err) {
                    console.log(`${String(err)}`);
                }
        }
        // switch (event.type) {
        //   case "payment_intent.succeeded":
        //     const paymentIntent = event.data.object as Stripe.PaymentIntent;
        //     const customerId = paymentIntent.customer as string;
        //     try {
        //       const customer = await stripe.customers.retrieve(customerId);
        //       console.log("Payment intent succeeded:", paymentIntent);
        //       console.log("Customer data:", customer);
        //     } catch (err) {
        //       console.log("Error retrieving customer:", `${String(err)}`);
        //       return res.status(400).send("error");
        //     }
        //     break;
        //   default:
        //     console.log(`Unhandled event type ${event.type}`);
        // }
    }
    return res.send().end();
}));
// stripeRouter.post(
//   "/webhook",
//   express.raw({ type: "application/json" }),
//   (req, res) => {
//     let webhook = process.env.STRIPE_WEB_HOOK;
//     // const sig = req.headers["stripe-signature"] as string | string[];
//     let data: any;
//     let eventType: string;
//     if(webhook) {
//       let event: Stripe.Event;
//       const sig = req.headers["stripe-signature"] as string | string[];
//       try {
//         event = stripe.webhooks.constructEvent(req.body,sig,webhook);
//       } catch(err) {
//         console.log(`Webhook signature verification failed ${err}`);
//         return res.status(400);
//       }
//       data = event.data.object;
//       eventType = event.type;
//     } else {
//       data = req.body.data.object;
//       eventType = req.body.type;
//     }
//     // if (eventType === 'checkout.session.completed') {
//     //   stripe.customers
//     //     .retrieve(data.customer)
//     //     .then(async (customer: Stripe.Customer) => {
//     //       try {
//     //         // CREATE ORDER
//     //         createOrder(customer, data);
//     //       } catch (err) {
//     //         console.log(typeof createOrder);
//     //         console.log(err);
//     //       }
//     //     })
//     //     .catch((err) => console.log(err.message));
//     // }
//     // try {
//     //   const payload = req.body as Buffer | string;
//     //   event = stripe.webhooks.constructEvent(
//     //     payload,
//     //     sig,
//     //     `${process.env.STRIPE_WEB_HOOK}`
//     //   );
//     //   console.log("webhook verified");
//     // } catch (err) {
//     //   if (err instanceof Error) {
//     //     res.status(400).send(`Webhook Error: ${err.message}`);
//     //   } else {
//     //     res.status(400).send(`Webhook Error: ${String(err)}`);
//     //   }
//     //   return;
//     // }
//     // Handle the event
//     switch (eventType) {
//       case "payment_intent.succeeded":
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         const paymentIntentSucceeded = eventType
//           .object as Stripe.PaymentIntent;
//         const customer = stripe.customers
//           .retrieve(paymentIntentSucceeded.customer as string)
//           .then((custom) => {
//             console.log(custom);
//           })
//           .catch((err) => console.log(err));
//         console.log(customer);
//         // Then define and call a function to handle the event payment_intent.succeeded
//         break;
//       // ... handle other event types
//       default:
//         console.log(`Unhandled event type ${event.type}`);
//     }
// // Return a 200 res to acknowledge receipt of the event
//     res.send().end();
//   }
// );
