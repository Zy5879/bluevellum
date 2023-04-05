import express from "express";
import { homeRouter } from "./controllers/home";
import { bagsRouter } from "./controllers/products";

const app = express();
app.use(express.json());

app.use("/", homeRouter);
app.use("/products", bagsRouter);

export default app;
