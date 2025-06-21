/**
 * 🚀 LAUNCH PAD FILE
 * This is the FIRST file that runs:
 * 1. Connects to the database
 * 2. Turns on the server light ("Listening on port 3000!")
 * 3. Makes everything start working together
 */

import app from './app'; // Import the main app file
import dotenv from 'dotenv'; // Import dotenv to read environment variables

// Load environment variables from .env file
dotenv.config(); // Critical: Loads .env variables

// Start the server
const PORT = process.env.PORT || 5000;

// This is where we connect to the database
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});