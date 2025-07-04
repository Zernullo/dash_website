/**
 * 🔑 SECRET SETTINGS FILE
 * Like a settings menu for the whole app:
 * - Database password (shhh!)
 * - Server port number
 * - Any special keys we need
 * (Actual secrets go in .env file)
 */

import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI)
       console.log("Connected to MongoDB Successfully")
    } catch (error) {
        console.error("ERROR connecting to DB",error);
        process.exit(1) //exit with failure
    }
};