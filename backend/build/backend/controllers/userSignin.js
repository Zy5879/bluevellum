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
exports.userLoginRouter = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_1 = __importDefault(require("../models/user"));
exports.userLoginRouter = (0, express_1.Router)();
exports.userLoginRouter.post("/", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield user_1.default.findOne({ email });
    const passwordCorrect = user === null ? false : yield bcrypt_1.default.compare(password, user.password);
    if (!(user && passwordCorrect)) {
        return res.status(401).json({ error: "invalid email or password" });
    }
    const userForToken = {
        email: user.email,
        id: user._id,
    };
    const secret = process.env.SECRET;
    const token = jsonwebtoken_1.default.sign(userForToken, secret, {
        expiresIn: 60 * 60,
    });
    res
        .status(200)
        .send({ token, email: user.email, firstname: user.firstname });
})));
exports.default = exports.userLoginRouter;
