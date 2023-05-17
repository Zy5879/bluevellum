import { Router } from "express";

export const homeRouter = Router();

homeRouter.get("/", (_req, res) => {
  res.send("Welcome to Blue Vellum");
});

export default homeRouter;
