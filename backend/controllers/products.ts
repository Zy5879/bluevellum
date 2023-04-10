import { Router } from "express";
import data from "../data/mockData";
// import productService from "../services/leatherService";
export const productsRouter = Router();

productsRouter.get("/bags", (_req, res) => {
  const item = data.filter((obj) => {
    return obj.type === "bag";
  });
  res.json(item);
});
productsRouter.get("/wallets", (_req, res) => {
  const item = data.filter((obj) => {
    return obj.category === "wallet";
  });
  res.json(item);
});
productsRouter.get("/wallets/:id", (req, res) => {
  const item = data.filter((obj) => {
    return obj.category === "wallet";
  });
  const id = Number(req.params.id);
  const findWalletId = item.find((w) => w.id === id);
  res.json(findWalletId);
});

productsRouter.get("/accessories", (_req, res) => {
  const item = data.filter((obj) => {
    return obj.type === "accessory";
  });
  res.json(item);
});
// productsRouter.get("/customs", (_req, res) => {
//   const customs = data.map((item) => item.bags.customBags);
//   res.json(customs);
// });
// productsRouter.get("/allProducts", (_req, res) => {
//   res.json(data);
// });
