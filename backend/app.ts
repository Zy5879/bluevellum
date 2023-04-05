import express from "express";
import { homeRouter } from "./controllers/home";
import { productsRouter } from "./controllers/products";

const app = express();
app.use(express.json());

app.use("/", homeRouter);
app.use("/products", productsRouter);

export default app;
