"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRouter = void 0;
const express_1 = require("express");
const middleware_1 = require("../utils/middleware");
const user_1 = __importDefault(require("../models/user"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const cart_1 = __importDefault(require("../models/cart"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const leather_1 = __importDefault(require("../models/leather"));
exports.cartRouter = (0, express_1.Router)();
exports.cartRouter.post("/", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { items } = req.body;
    const token = (0, middleware_1.getTokenFrom)(req);
    const decodedToken = jsonwebtoken_1.default.verify(token, `${process.env.SECRET}`);
    const user = yield user_1.default.findById(decodedToken.id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    items.userId = user._id.toString();
    const leather = yield leather_1.default.findOne({ uniqueId: items.uniqueId });
    console.log(leather);
    if (!leather) {
        return res.status(404).json({ error: "Product does not exist" });
    }
    let carts = yield cart_1.default.findOne({ userId: user._id });
    if (!carts) {
        carts = new cart_1.default({ userId: user._id, items: items });
        const savedCart = yield carts.save();
        yield user_1.default.findByIdAndUpdate(user, {
            $push: { cart: savedCart._id },
        });
        return res.json(carts);
    }
    const existingItem = yield cart_1.default.findOne({
        userId: user._id,
        "items.uniqueId": items.uniqueId,
    });
    if (existingItem) {
        const updateCart = yield cart_1.default.findOneAndUpdate({ userId: user._id, "items.uniqueId": items.uniqueId }, { $inc: { "items.$.qty": 1 } }, { new: true }).populate("items");
        console.log("item exists");
        return res.json(updateCart);
    }
    else {
        console.log("item does not exist");
        const updateCart = yield cart_1.default.findByIdAndUpdate(carts._id, { $push: { items: items } }, { new: true }).populate("items");
        return res.json(updateCart);
    }
})));
exports.cartRouter.put("/", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { items } = req.body;
    console.log(items);
    const token = (0, middleware_1.getTokenFrom)(req);
    const decodedToken = jsonwebtoken_1.default.verify(token, `${process.env.SECRET}`);
    const user = yield user_1.default.findById(decodedToken.id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    const leather = yield leather_1.default.findOne({ uniqueId: items.uniqueId });
    if (!leather) {
        return res.status(404).json({ error: "Product does not exist" });
    }
    const updatedCart = yield cart_1.default.findOneAndUpdate({ userId: user._id, "items.uniqueId": items.uniqueId }, {
        $inc: { "items.$.qty": -1 },
    }, { new: true }).populate("items");
    console.log(updatedCart);
    return res.json(updatedCart);
})));
exports.cartRouter.get("/", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = (0, middleware_1.getTokenFrom)(req);
    const decodedToken = jsonwebtoken_1.default.verify(token, `${process.env.SECRET}`);
    const user = yield user_1.default.findById(decodedToken.id).populate({
        path: "cart",
        populate: { path: "items" },
    });
    console.log(user === null || user === void 0 ? void 0 : user._id);
    if (!user) {
        return res.status(404).json({ error: "User not found" }).end();
    }
    else {
        return res.json(user);
    }
})));
exports.cartRouter.delete("/", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, cost, qty, inventory, type, img, uniqueId, category } = req.body;
    const token = (0, middleware_1.getTokenFrom)(req);
    const decodedToken = jsonwebtoken_1.default.verify(token, `${process.env.SECRET}`);
    const user = yield user_1.default.findById(decodedToken.id).populate("cart");
    console.log(decodedToken.id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    const cart = yield cart_1.default.findOneAndUpdate({
        userId: user._id,
        "items.uniqueId": uniqueId,
    }, {
        $pull: {
            items: { name, cost, qty, inventory, type, img, category },
        },
    }, { new: true }).populate("items");
    console.log("cart item deleted succesfully");
    res.json(cart);
    if (!cart) {
        return res.status(404).json({ error: "Cart item not found" });
    }
})));
