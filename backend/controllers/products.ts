import { Router } from "express";
import data from "../data/mockData";
export const bagsRouter = Router();

bagsRouter.get("/bags", (_req, res) => {
  const bags = data.map((item) => item.bags);
  res.json(bags);
});
bagsRouter.get("/wallets", (_req, res) => {
  const wallets = data.map((item) => item.wallets);
  res.json(wallets);
});
bagsRouter.get("/accessories", (_req, res) => {
  const accessories = data.map((item) => item.accesories);
  res.json(accessories);
});
bagsRouter.get("/customs", (_req, res) => {
  const customs = data.map((item) => item.bags.customBags);
  res.json(customs);
});
bagsRouter.get("/allProducts", (_req, res) => {
  res.json(data);
});
