import express from "express"; // Import Express framework
import sanitizeHtml from "sanitize-html"; // Import sanitize-html to clean HTML input
import middleware from "../middleware/index.middleware"; // Import custom middleware setup

const app = express(); // Create an instance of the Express app

// Add sanitizeHtml to response locals so it can be used in routes or views
app.use((req, res, next) => {
  res.locals.sanitizeHtml = sanitizeHtml;
  next(); // Move to the next middleware
});

// Parse incoming JSON requests
app.use(express.json());

// Parse form data (URL-encoded)
app.use(express.urlencoded({ extended: true }));

// Apply custom middleware (like CORS, body-parser, file paths)
middleware(app);

// Export the configured Express app
export default app;
