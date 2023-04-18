import * as dotenv from "dotenv";
dotenv.config();
import asyncHandler from "express-async-handler";
import { Router } from "express";
import Stripe from "stripe";

const stripe = new Stripe(`${process.env.STRIPE_KEY}`, {
  apiVersion: "2022-11-15",
});

export const stripeRouter = Router();

stripeRouter.post(
  "/create-checkout-session",
  asyncHandler(async (_req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "T-shirt" },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });
    res.send({ url: session.url });
  })
);
