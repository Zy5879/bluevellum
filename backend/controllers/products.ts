import { Router } from "express";
import asyncHandler from "express-async-handler";
import Leather from "../models/leather";
export const productsRouter = Router();

productsRouter.get(
  "/bags",
  asyncHandler(async (_req, res) => {
    const item = await Leather.find({ type: "bag" });
    res.json(item);
  })
);
productsRouter.get(
  "/bags/gentlemanbag",
  asyncHandler(async (_req, res) => {
    const item = await Leather.find({ category: "gentlemanbag" });
    res.json(item);
  })
);
productsRouter.get(
  "/item/:id",
  asyncHandler(async (req, res) => {
    const item = await Leather.findById(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(400).end();
    }
  })
);
productsRouter.get(
  "/bags/tote",
  asyncHandler(async (_req, res) => {
    const item = await Leather.find({ category: "tote" });
    res.json(item);
  })
);

productsRouter.get(
  "/bags/handbag",
  asyncHandler(async (_req, res) => {
    const item = await Leather.find({ category: "handbag" });
    res.json(item);
  })
);

//END OF BAG ROUTES

productsRouter.get(
  "/wallets",
  asyncHandler(async (_req, res) => {
    const item = await Leather.find({ type: "wallet" });
    res.json(item);
  })
);

//END OF WALLET ROUTES

productsRouter.get(
  "/accessories",
  asyncHandler(async (_req, res) => {
    const item = await Leather.find({ type: "accessory" });
    res.json(item);
  })
);

productsRouter.get(
  "/accessories/belt",
  asyncHandler(async (_req, res) => {
    const item = await Leather.find({ category: "belt" });
    res.json(item);
  })
);

productsRouter.get(
  "/accessories/watch",
  asyncHandler(async (_req, res) => {
    const item = await Leather.find({ category: "watch" });
    res.json(item);
  })
);

//END OF ACCESSORIES ROUTES

productsRouter.get(
  "/customs",
  asyncHandler(async (_req, res) => {
    const item = await Leather.find({ category: "custom" });
    res.json(item);
  })
);

//END OF CUSTOM ROUTES
