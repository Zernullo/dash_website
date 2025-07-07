/**
 * 🚀 LAUNCH PAD FILE
 * This is the FIRST file that runs:
 * 1. Connects to the database
 * 2. Turns on the server light ("Listening on port 3000!")
 * 3. Makes everything start working together
 */

import express from 'express';
import Routes from './routes/Routes.js'
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.json());// middleware for the req.body 

app.use("/api/data", Routes);

connectDB().then(() =>{ //once the database connects, then listen
app.listen(PORT, () => {
  console.log("Hello World from backend! PORT:", PORT);
  });
});