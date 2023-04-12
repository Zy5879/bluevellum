import config from "./utils/config";
// import * as dotenv from "dotenv";
// dotenv.config();
import express from "express";
import "express-async-errors";
import { productsRouter } from "./controllers/products";
import { globalErrorHandler, unknownEndpoint } from "./utils/middleware";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

mongoose.set("strictQuery", false);

console.log("connecting to", config.MONGODB_URI);

mongoose
  .connect(`${config.MONGODB_URI}`)
  .then(() => {
    console.log("connected to MONGODB");
  })
  .catch((error) => {
    if (error instanceof Error) {
      console.log("error connecting to MONGODB", error.message);
    }
  });

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/products", productsRouter);

app.use(unknownEndpoint);
app.use(globalErrorHandler);

export default app;
