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
exports.productsRouter = void 0;
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const leather_1 = __importDefault(require("../models/leather"));
exports.productsRouter = (0, express_1.Router)();
exports.productsRouter.get("/bags", (0, express_async_handler_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield leather_1.default.find({ type: "bag" });
    res.json(item);
})));
exports.productsRouter.get("/bags/gentlemanbag", (0, express_async_handler_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield leather_1.default.find({ category: "gentlemanbag" });
    res.json(item);
})));
exports.productsRouter.get("/item/:id", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield leather_1.default.findById(req.params.id);
    if (item) {
        res.json(item);
    }
    else {
        res.status(400).end();
    }
})));
exports.productsRouter.get("/bags/tote", (0, express_async_handler_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield leather_1.default.find({ category: "tote" });
    res.json(item);
})));
exports.productsRouter.get("/bags/handbag", (0, express_async_handler_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield leather_1.default.find({ category: "handbag" });
    res.json(item);
})));
//END OF BAG ROUTES
exports.productsRouter.get("/wallets", (0, express_async_handler_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield leather_1.default.find({ type: "wallet" });
    res.json(item);
})));
//END OF WALLET ROUTES
exports.productsRouter.get("/accessories", (0, express_async_handler_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield leather_1.default.find({ type: "accessory" });
    res.json(item);
})));
exports.productsRouter.get("/accessories/belt", (0, express_async_handler_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield leather_1.default.find({ category: "belt" });
    res.json(item);
})));
exports.productsRouter.get("/accessories/watch", (0, express_async_handler_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield leather_1.default.find({ category: "watch" });
    res.json(item);
})));
//END OF ACCESSORIES ROUTES
exports.productsRouter.get("/customs", (0, express_async_handler_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield leather_1.default.find({ category: "custom" });
    res.json(item);
})));
//END OF CUSTOM ROUTES
