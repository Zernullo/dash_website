/**
 * 📝 BLUEPRINT FILE
 * Defines what our data looks like:
 * - A User has: name, email, password
 * - A Post has: title, content, date
 * (Like a form you have to fill out)
 */

import mongoose from "mongoose";

const carschema = new mongoose.Schema({
    "name": {
        type: String,
        required: true
    },
    "mph":{
        type: Number,
        required:true
    },
    "gasLevel":{
        type: Number,
        required:true
    },
    "zeroToSixty":{
        type: Number
    },
    "lapTime":
    {
        type: Number
    }
    
}, {timestamps:true} //createdAt and updatedAt by default
)

const Car = mongoose.model("Car", carschema) //create model based off schema

export default Car