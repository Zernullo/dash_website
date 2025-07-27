/**
 * 🚀 LAUNCH PAD FILE
 * This is the FIRST file that runs:
 * 1. Connects to the database
 * 2. Turns on the server light ("Listening on port 3000!")
 * 3. Makes everything start working together
 */

import dotenv from 'dotenv'
import { initWebSocket } from './utils/websocket';
import { connectDB } from './config/index';
import app from './app'; // Import the main app file, which sets up the server


dotenv.config({ path: 'database.env' }); // Load environment variables from database.env

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  // Start HTTP server
  const server = app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
  });

  // Initialize WebSocket server using same HTTP server
  initWebSocket(server);
}).catch((err) => {
  console.error("Failed to connect to database:", err);
});