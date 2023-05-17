"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const matchers_1 = __importDefault(require("@testing-library/jest-dom/matchers"));
const vitest_1 = require("vitest");
vitest_1.expect.extend(matchers_1.default);
