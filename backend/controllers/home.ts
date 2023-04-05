import { Router } from "express";
export const homeRouter = Router();
import data from "../data/mockData";

homeRouter.get("/", (_req, res) => {
  console.log("Let's Begin");
  res.json(data);
});
