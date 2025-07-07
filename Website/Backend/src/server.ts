/**
 * 🚀 LAUNCH PAD FILE
 * This is the FIRST file that runs:
 * 1. Connects to the database
 * 2. Turns on the server light ("Listening on port 3000!")
 * 3. Makes everything start working together
 */

import { connectDB } from './config/index';
import dotenv from 'dotenv'
import app from './app'; // Import the main app file, which sets up the server


dotenv.config({ path: 'database.env' }); // Load environment variables from database.env

const PORT = process.env.PORT || 5000;

connectDB().then(() =>{ //once the database connects, then listen
  app.listen(PORT, () => {
    console.log("Server listening on PORT:", PORT);
  });
});