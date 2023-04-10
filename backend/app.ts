import express from "express";
import { productsRouter } from "./controllers/products";
import { errorHandler, unknownEndpoint } from "./utils/middleware";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/products", productsRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
