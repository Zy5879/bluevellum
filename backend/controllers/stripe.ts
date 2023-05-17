/* eslint-disable @typescript-eslint/no-misused-promises */
import * as dotenv from "dotenv";
dotenv.config();
import asyncHandler from "express-async-handler";
import { Router } from "express";
import Stripe from "stripe";
import { ParamsDictionary } from "express-serve-static-core";
import { LeatherItems } from "../types";
import express from "express";
import Cart from "../models/cart";
import User from "../models/user";
import Order from "../models/order";

const stripe = new Stripe(`${process.env.STRIPE_KEY}`, {
  apiVersion: "2022-11-15",
});

export const stripeRouter = Router();

stripeRouter.post<ParamsDictionary, any, LeatherItems[]>(
  "/checkout",
  express.json({ type: "application/json" }),
  asyncHandler(async (req, res) => {
    const userId = req.body[0].userId;
    const customer = await stripe.customers.create({
      metadata: {
        userId: userId,
        cart: JSON.stringify(req.body),
      },
    });

    const customerId: string = customer.id;
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

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer: customerId,
      line_items,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/checkout-success/${userId}`,
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
    const userId = customer.metadata.userId;
    const cart = await Cart.findOneAndDelete({ userId: userId });
    const user = await User.findOneAndUpdate(
      { cart: cart?._id },
      { $pull: { cart: cart?._id } },
      { new: true }
    );
    console.log(user);
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
            console.log(customer);
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
    }

    return res.send().end();
  }
);
