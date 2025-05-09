"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Import Express and its types
const cors_1 = __importDefault(require("cors")); // Import CORS for handling cross-origin requests
const body_parser_1 = __importDefault(require("body-parser")); // Import body-parser for parsing request bodies
// Middleware function configures Express app with various middlewares
const middleware = (app) => {
    // Enable CORS to allow requests from any origin
    app.use((0, cors_1.default)({
        origin: "*", // Allow all domains
    }));
    // Parse incoming JSON request bodies
    app.use(body_parser_1.default.json());
    // Parse URL-encoded form data
    app.use(express_1.default.urlencoded({ extended: false }));
};
// Export the middleware function to use it elsewhere
exports.default = middleware;
