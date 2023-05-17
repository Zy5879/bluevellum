import config from "./utils/config";
import express from "express";
import "express-async-errors";
import { productsRouter } from "./controllers/products";
import userLoginRouter from "./controllers/userSignin";
import userSignupRouter from "./controllers/usersSignup";
import { cartRouter } from "./controllers/carts";
import { stripeRouter } from "./controllers/stripe";
import homeRouter from "./controllers/home";
import {
  errorHandler,
  globalErrorHandler,
  unknownEndpoint,
} from "./utils/middleware";
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
app.use(express.static("build"));

app.use("/stripe", stripeRouter);
app.use(express.json());
app.use("/", homeRouter);
app.use("/products", productsRouter);
app.use("/login", userLoginRouter);
app.use("/signup", userSignupRouter);
app.use("/cart", cartRouter);

app.use(unknownEndpoint);
app.use(errorHandler);
app.use(globalErrorHandler);

export default app;
