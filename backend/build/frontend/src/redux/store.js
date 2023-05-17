"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const authSlice_1 = __importDefault(require("./features/authSlice"));
const productApi_1 = require("./features/productApi");
const authApi_1 = require("./features/authApi");
const stripeApi_1 = require("./features/stripeApi");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        authUser: authSlice_1.default,
        [productApi_1.productApi.reducerPath]: productApi_1.productApi.reducer,
        [authApi_1.authApi.reducerPath]: authApi_1.authApi.reducer,
        [stripeApi_1.stripeApi.reducerPath]: stripeApi_1.stripeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi_1.productApi.middleware, authApi_1.authApi.middleware, stripeApi_1.stripeApi.middleware),
});
