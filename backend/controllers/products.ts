import { Router } from "express";
import data from "../data/mockData";
export const productsRouter = Router();

productsRouter.get("/bags", (_req, res) => {
  const bags = data.map((item) => item.bags);
  res.json(bags);
});
productsRouter.get("/wallets", (_req, res) => {
  const wallets = data.map((item) => item.wallets);
  res.json(wallets);
});
productsRouter.get("/accessories", (_req, res) => {
  const accessories = data.map((item) => item.accesories);
  res.json(accessories);
});
productsRouter.get("/customs", (_req, res) => {
  const customs = data.map((item) => item.bags.customBags);
  res.json(customs);
});
productsRouter.get("/allProducts", (_req, res) => {
  res.json(data);
});
