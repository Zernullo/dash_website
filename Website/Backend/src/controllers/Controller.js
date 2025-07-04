/**
 * 🎮 REMOTE CONTROL FILE
 * When someone visits a URL, this decides:
 * - What data to get from database
 * - What to send back
 * Example: If you visit /puppies, this finds puppy pictures
 */
import Car from "../models/Model.js"

export const getAllCars = async (_,res) =>{ // "_" b/c there is no use of the request parameter
    try {
        const cars = await Car.find().sort({createdAt: -1}); // ".sort()" with -1 with sort in desc. order (newest first)
        res.status(200).json(cars)
    } catch (error) {
        console.error("Error in getAllCars controller",error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const getCarById = async (req,res) =>{
    try {
        const car = await Car.findById(req.params.id)
        if (!car) return res.status(404).json({message:"Car Not Found"})
        res.json(car)
    } catch (error) {
        console.error("Error in getCarById controller",error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const createCar = async (req,res) =>{
    try {
        const {name,mph,gasLevel,zeroToSixty,lapTime} = req.body
        const car = new Car({name,mph,gasLevel,zeroToSixty,lapTime})

        const savedCar = await car.save()
        res.status(201).json(savedCar)

    } catch (error) {
        console.error("Error in createCar controller".error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const updateCar = async (req,res) =>{
    try {
        const {name,mph,gasLevel,zeroToSixty,lapTime} = req.body
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, {name,mph,gasLevel,zeroToSixty,lapTime}, {
            new:true //gives new car with updated fields
        })
        if (!updatedCar) return res.status(404).json({message: "Car not found"})
        res.status(200).json({message:"Car Updated Successfully"})
    } catch (error) {
        console.error("Error in updateCar controller".error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const deleteCar = async (req,res) =>{
    try {
       const deletedCar = await Car.findByIdAndDelete(req.params.id)
       if (!deleteCar) return res.status(404).json({message: "Car not found"})
       res.status(200).json({message:"Car Deleted Successfully"})
        
    } catch (error) {
        console.error("Error in deleteCar controller".error);
        res.status(500).json({message:"Internal Server Error"})
    }
}