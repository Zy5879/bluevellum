"use strict";
/// <reference types="vitest" />
/// <reference types="vite/client" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./src/setupTests.ts"],
    },
    server: {
        proxy: {
            "/products": {
                target: "https://blue-vellum.onrender.com",
                // target: "http://localhost:3000/",
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
