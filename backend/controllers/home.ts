import { Router } from "express";
export const homeRouter = Router();

homeRouter.get("/", (_req, res) => {
  console.log("Let's Begin");
  res;
});
