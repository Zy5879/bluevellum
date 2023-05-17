"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./utils/config"));
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const products_1 = require("./controllers/products");
const userSignin_1 = __importDefault(require("./controllers/userSignin"));
const usersSignup_1 = __importDefault(require("./controllers/usersSignup"));
const carts_1 = require("./controllers/carts");
const stripe_1 = require("./controllers/stripe");
const home_1 = __importDefault(require("./controllers/home"));
const middleware_1 = require("./utils/middleware");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", false);
console.log("connecting to", config_1.default.MONGODB_URI);
mongoose_1.default
    .connect(`${config_1.default.MONGODB_URI}`)
    .then(() => {
    console.log("connected to MONGODB");
})
    .catch((error) => {
    if (error instanceof Error) {
        console.log("error connecting to MONGODB", error.message);
    }
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use("/stripe", stripe_1.stripeRouter);
app.use(express_1.default.json());
app.use("/", home_1.default);
app.use("/products", products_1.productsRouter);
app.use("/login", userSignin_1.default);
app.use("/signup", usersSignup_1.default);
app.use("/cart", carts_1.cartRouter);
app.use(middleware_1.unknownEndpoint);
app.use(middleware_1.errorHandler);
app.use(middleware_1.globalErrorHandler);
exports.default = app;
