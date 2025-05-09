"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Import Express framework
const sanitize_html_1 = __importDefault(require("sanitize-html")); // Import sanitize-html to clean HTML input
const index_middleware_1 = __importDefault(require("../middleware/index.middleware")); // Import custom middleware setup
const app = (0, express_1.default)(); // Create an instance of the Express app
// Add sanitizeHtml to response locals so it can be used in routes or views
app.use((req, res, next) => {
    res.locals.sanitizeHtml = sanitize_html_1.default;
    next(); // Move to the next middleware
});
// Parse incoming JSON requests
app.use(express_1.default.json());
// Parse form data (URL-encoded)
app.use(express_1.default.urlencoded({ extended: true }));
// Apply custom middleware (like CORS, body-parser, file paths)
(0, index_middleware_1.default)(app);
// Export the configured Express app
exports.default = app;
