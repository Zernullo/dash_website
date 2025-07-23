/**
 * 🔑 SECRET SETTINGS FILE
 * Like a settings menu for the whole app:
 * - Database password (shhh!)
 * - Server port number
 * - Any special keys we need
 * (Actual secrets go in .env file)
 */

import mongoose from 'mongoose'
import dotenv from 'dotenv'

// you change { path: 'database.env' } to the path of your .env file example: { path: '(ur file name).env' }
dotenv.config({ path: 'database.env' }); // Load environment variables from database.env

const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI as string,
  JWT_SECRET: process.env.JWT_SECRET as string
}

export const connectDB = async (): Promise<void> => {
    try {
       await mongoose.connect(config.MONGO_URI)
       console.log("Connected to MongoDB Successfully")
    } catch (error) {
        console.error("ERROR connecting to DB", error);
        process.exit(1) //exit with failure
    }
};