import { Router } from "express";
import data from "../data/mockData";
export const homeRouter = Router();

homeRouter.get("/", (_req, res) => {
  console.log("Let's Begin");
  res.json(data);
});
