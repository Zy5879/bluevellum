import * as dotenv from "dotenv";
dotenv.config();
import asyncHandler from "express-async-handler";
import { Router } from "express";
import Stripe from "stripe";
import { ParamsDictionary } from "express-serve-static-core";
import { LeatherItems } from "../types";
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
  asyncHandler(async (req, res) => {
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
      line_items,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

    // const {  } = req.body;
    // const line_items = req.body.leatherIdmap((item) => {
    //   return item.leatherId.map((leatherItem) => {
    //     return {
    //       price_data: {
    //         currency: "usd",
    //         product_data: {
    //           name: leatherItem.name,
    //           images: [leatherItem.img],
    //           metadata: {
    //             id: leatherItem.id,
    //           },
    //           unit_amount: leatherItem.cost * 100,
    //         },
    //         quantity: leatherItem.qty,
    //       },
    //     };
    //   });
    // });
    // const line_items = req.body.leatherId.map((item) => {
    //   return {
    //     price_data: {
    //       currency: "usd",
    //       product_data: {
    //         name: item.name,
    //         images: [item.img],
    //         metadata: {
    //           id: item.id,
    //         },
    //         unit_amount: item.cost * 100,
    //       },
    //       quantity: item.qty,
    //     },
    //   };
    // });
    // const line_items = req.body.items.map((item) => {

    // console.log(line_items);

    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ["card"],
    //   // line_items,
    //   mode: "payment",
    // success_url: `${process.env.CLIENT_URL}/checkout-success`,
    // cancel_url: `${process.env.CLIENT_URL}/cart`,
    // });
    // const line_items = req.body.items.map(item => {
    //   return {
    //     price_data: {
    //       currency: "usd",
    //       product_data: {
    //         name: item.leatherId.name,
    //         images: [item.leatherId.img],
    //         metadata: {
    //           id: item.userId
    //         },
    //         unit_amount: item.leatherId.cost * 100
    //       },
    //       quantity: item.qty
    //     }
    //   };
    // });
    // const session = await stripe.checkout.sessions.create({
    //   line_items,
    //   mode: "pa"
    // })
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ["card"],
    //   line_items: [
    //     {
    //       price_data: {
    //         currency: "usd",
    //         product_data: { name: "T-Shirt" },
    //         unit_amount: 2000,
    //       },
    //       quantity: 1,
    //     },
    //   ],
    //   mode: "payment",
    //   success_url: `${process.env.CLIENT_URL}/checkout-success`,
    //   cancel_url: `${process.env.CLIENT_URL}/cart`,
    // });
    res.json({ url: session.url });
  })
);
