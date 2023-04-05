import express from "express";
import { homeRouter } from "./controllers/home";
import { productsRouter } from "./controllers/products";
import { unknownEndpoint } from "./utils/middleware";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", homeRouter);
app.use("/products", productsRouter);

app.use(unknownEndpoint);

export default app;
