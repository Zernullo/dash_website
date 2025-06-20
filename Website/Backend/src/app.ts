/**
 * 🏠 HOUSE RULES FILE
 * This is where we set up all the basic rules for our server:
 * - Who can visit (security)
 * - How to read messages (JSON data)
 * - Where to log problems
 * - What to do when things break
 */

import express from 'express';
import cors from 'cors';

const app = express(); // Create the server
app.use(cors()); // frontend-backend connection

// Common mistake: Forgetting to use json middleware
app.use(express.json()); // Allows us to read JSON data from requests

// This is where we define the main route
app.get('/', (req, res) => {
  res.send('Hello World from backend!');
});

export default app; // Export the app so we can use it in server.ts