/**
 * 🎮 REMOTE CONTROL FILE
 * When someone visits a URL, this decides:
 * - What data to get from database
 * - What to send back
 * Example: If you visit /puppies, this finds puppy pictures
 */
import { Request, Response } from 'express';
import Car from "../models/Model";

interface ICar {
    name: string;
    mph: number;
    gasLevel: number;
    zeroToSixty: number;
    lapTime: number;
    createdAt?: Date;
}

export const getAllCars = async (_: Request, res: Response): Promise<void> => {
    try {
        const cars = await Car.find().sort({ createdAt: -1 });
        res.status(200).json(cars);
    } catch (error) {
        console.error("Error in getAllCars controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getCarById = async (req: Request, res: Response): Promise<void> => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            res.status(404).json({ message: "Car Not Found" });
            return;
        }
        res.json(car);
    } catch (error) {
        console.error("Error in getCarById controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const createCar = async (req: Request<{}, {}, ICar>, res: Response): Promise<void> => {
    try {
        const { name, mph, gasLevel, zeroToSixty, lapTime } = req.body;
        const car = new Car({ name, mph, gasLevel, zeroToSixty, lapTime });

        const savedCar = await car.save();
        res.status(201).json(savedCar);
    } catch (error) {
        console.error("Error in createCar controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateCar = async (req: Request<{ id: string }, {}, ICar>, res: Response): Promise<void> => {
    try {
        const { name, mph, gasLevel, zeroToSixty, lapTime } = req.body;
        const updatedCar = await Car.findByIdAndUpdate(
            req.params.id,
            { name, mph, gasLevel, zeroToSixty, lapTime },
            { new: true }
        );
        
        if (!updatedCar) {
            res.status(404).json({ message: "Car not found" });
            return;
        }
        res.status(200).json({ message: "Car Updated Successfully", car: updatedCar });
    } catch (error) {
        console.error("Error in updateCar controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteCar = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    try {
        const deletedCar = await Car.findByIdAndDelete(req.params.id);
        if (!deletedCar) {
            res.status(404).json({ message: "Car not found" });
            return;
        }
        res.status(200).json({ message: "Car Deleted Successfully" });
    } catch (error) {
        console.error("Error in deleteCar controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};