/* eslint-disable @typescript-eslint/no-misused-promises */
import * as dotenv from "dotenv";
dotenv.config();
import asyncHandler from "express-async-handler";
import { Router } from "express";
import Stripe from "stripe";
import { ParamsDictionary } from "express-serve-static-core";
import { LeatherItems } from "../types";
import express from "express";
// import { OrderInterface } from "../types";
import Order from "../models/order";
import { v4 as uuidv4 } from "uuid";

// import { ParamsDictionary } from "express-serve-static-core";
// import { StripeCart } from "../types";
// import { CartItems, IUser, Leather } from "../types";
// import Leather from "../models/leather";

const stripe = new Stripe(`${process.env.STRIPE_KEY}`, {
  apiVersion: "2022-11-15",
});

export const stripeRouter = Router();

stripeRouter.post<ParamsDictionary, any, LeatherItems[]>(
  "/checkout",
  express.json({ type: "application/json" }),
  asyncHandler(async (req, res) => {
    const customer = await stripe.customers.create({
      metadata: {
        userId: uuidv4(),
        cart: JSON.stringify(req.body),
      },
    });

    console.log(customer);

    const customerId: string = customer.id;

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

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer: customerId,
      line_items,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/checkout-success/${customerId}`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

    res.json({ url: session.url });
  })
);
//Stripe CLI

const createOrder = async (
  customer: Stripe.Customer,
  data: Stripe.Checkout.Session
) => {
  const items: unknown = JSON.parse(customer.metadata.cart);
  const newOrder = new Order({
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
    const savedOrder = await newOrder.save();
    console.log("Proccessed Order", savedOrder);
  } catch (err) {
    console.log(`${String(err)}`);
  }
};

stripeRouter.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const webhookSecret = process.env.STRIPE_WEB_HOOK;
    console.log(webhookSecret);

    let data;
    let event: Stripe.Event | undefined;
    console.log(req.body);

    if (webhookSecret) {
      const sig = req.headers["stripe-signature"] as string;
      // const payload = req.body as Buffer | string;
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        event = stripe.webhooks.constructEvent(
          req.body as Buffer | string,
          sig,
          webhookSecret
        );
        console.log(event);
      } catch (err) {
        console.log(`Webhook signature verification failed: ${String(err)}`);
        return res.status(400).send("Webhook error");
      }
    }

    if (event) {
      switch (event.type) {
        case "checkout.session.completed":
          try {
            data = event.data.object as Stripe.Checkout.Session;
            const customer = data.customer as string;
            const customerId = (await stripe.customers.retrieve(
              customer
            )) as Stripe.Customer;
            await createOrder(customerId, data);
            console.log(customerId);
            console.log("data:", data);
          } catch (err) {
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
  }
);

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
