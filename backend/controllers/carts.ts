import { Router } from "express";
import { getTokenFrom } from "../utils/middleware";
import User from "../models/user";
import asyncHandler from "express-async-handler";
import Cart from "../models/cart";
import { CartItems, LeatherItems } from "../types";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ParamsDictionary } from "express-serve-static-core";
import Leather from "../models/leather";

export const cartRouter = Router();

cartRouter.post<ParamsDictionary, any, CartItems>(
  "/",
  asyncHandler(async (req, res): Promise<any> => {
    const { items } = req.body;

    const token = getTokenFrom(req) as string;
    const decodedToken = jwt.verify(
      token,
      `${process.env.SECRET}`
    ) as JwtPayload;

    const user = await User.findById(decodedToken.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    items.userId = user._id.toString();

    const leather = await Leather.findOne({ uniqueId: items.uniqueId });
    console.log(leather);

    if (!leather) {
      return res.status(404).json({ error: "Product does not exist" });
    }

    let carts = await Cart.findOne({ userId: user._id });

    if (!carts) {
      carts = new Cart({ userId: user._id, items: items });
      const savedCart = await carts.save();
      await User.findByIdAndUpdate(user, {
        $push: { cart: savedCart._id },
      });
      return res.json(carts);
    }

    const existingItem = await Cart.findOne({
      userId: user._id,
      "items.uniqueId": items.uniqueId,
    });

    if (existingItem) {
      const updateCart = await Cart.findOneAndUpdate(
        { userId: user._id, "items.uniqueId": items.uniqueId },
        { $inc: { "items.$.qty": 1 } },
        { new: true }
      ).populate("items");

      console.log("item exists");
      return res.json(updateCart);
    } else {
      console.log("item does not exist");
      const updateCart = await Cart.findByIdAndUpdate(
        carts._id,
        { $push: { items: items } },
        { new: true }
      ).populate("items");
      return res.json(updateCart);
    }
  })
);

cartRouter.put<ParamsDictionary, any, CartItems>(
  "/",
  asyncHandler(async (req, res): Promise<any> => {
    const { items } = req.body;
    console.log(items);

    const token = getTokenFrom(req) as string;
    const decodedToken = jwt.verify(
      token,
      `${process.env.SECRET}`
    ) as JwtPayload;
    const user = await User.findById(decodedToken.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const leather = await Leather.findOne({ uniqueId: items.uniqueId });

    if (!leather) {
      return res.status(404).json({ error: "Product does not exist" });
    }

    const updatedCart = await Cart.findOneAndUpdate(
      { userId: user._id, "items.uniqueId": items.uniqueId },
      {
        $inc: { "items.$.qty": -1 },
      },
      { new: true }
    ).populate("items");

    console.log(updatedCart);
    return res.json(updatedCart);
  })
);

cartRouter.get<ParamsDictionary, any, CartItems>(
  "/",
  asyncHandler(async (req, res): Promise<any> => {
    const token = getTokenFrom(req) as string;
    const decodedToken = jwt.verify(
      token,
      `${process.env.SECRET}`
    ) as JwtPayload;

    const user = await User.findById(decodedToken.id).populate({
      path: "cart",
      populate: { path: "items" },
    });

    console.log(user?._id);

    if (!user) {
      return res.status(404).json({ error: "User not found" }).end();
    } else {
      return res.json(user);
    }
  })
);

cartRouter.delete<ParamsDictionary, any, LeatherItems>(
  "/",
  asyncHandler(async (req, res): Promise<any> => {
    const { name, cost, qty, inventory, type, img, uniqueId, category } =
      req.body;

    const token = getTokenFrom(req) as string;
    const decodedToken = jwt.verify(
      token,
      `${process.env.SECRET}`
    ) as JwtPayload;
    const user = await User.findById(decodedToken.id).populate("cart");
    console.log(decodedToken.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const cart = await Cart.findOneAndUpdate(
      {
        userId: user._id,
        "items.uniqueId": uniqueId,
      },
      {
        $pull: {
          items: { name, cost, qty, inventory, type, img, category },
        },
      },
      { new: true }
    ).populate("items");

    console.log("cart item deleted succesfully");
    res.json(cart);

    if (!cart) {
      return res.status(404).json({ error: "Cart item not found" });
    }
  })
);
