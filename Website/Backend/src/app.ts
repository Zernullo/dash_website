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
import Routes from './routes/Routes';  // Make sure this import is here
import dotenv from 'dotenv';

dotenv.config({ path: 'database.env' }); // load env variables if needed here

const app = express(); // Create the server

app.use(cors({
  origin: ['http://localhost:5173', 'ws://your-esp32-ip'],
  credentials: true
}));// Allow requests from specific origins

app.use(express.json()); // Middleware to parse JSON requests

// Routes
app.use("/api/data", Routes);

// Main root route
app.get('/', (req, res) => {
  const PORT = process.env.PORT || 5000;
  res.send(`Connected to backend! PORT: ${PORT}`);
});

export default app; // Export app to be used in server.ts
