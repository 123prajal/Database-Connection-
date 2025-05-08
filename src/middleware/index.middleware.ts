import express, { Application } from "express"; // Import Express and its types
import cors from "cors"; // Import CORS for handling cross-origin requests
import bodyParser from "body-parser"; // Import body-parser for parsing request bodies

// Middleware function configures Express app with various middlewares
const middleware = (app: Application) => {
  // Enable CORS to allow requests from any origin
  app.use(
    cors({
      origin: "*", // Allow all domains
    })
  );

  // Parse incoming JSON request bodies
  app.use(bodyParser.json());

  // Parse URL-encoded form data
  app.use(express.urlencoded({ extended: false }));
};

// Export the middleware function to use it elsewhere
export default middleware;
