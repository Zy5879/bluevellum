"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leatherSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("../types");
exports.leatherSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
    },
    type: {
        type: String,
        enum: types_1.Types,
    },
    uniqueId: {
        type: String,
    },
    category: {
        type: String,
        enum: types_1.Category,
    },
    inventory: {
        type: Number,
    },
    img: {
        type: String,
    },
    qty: {
        type: Number,
        default: 1,
    },
    userId: { type: String },
});
exports.leatherSchema.set("toJSON", {
    transform: (_document, returnedObject) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});
const Leather = mongoose_1.default.model("Leather", exports.leatherSchema);
exports.default = Leather;
