/**
 * 🚦 TRAFFIC LIGHT FILE
 * Tells requests where to go:
 * - "/login" → go to loginController
 * - "/users" → go to userController
 * (Like a phone operator directing calls)
 */
import express from 'express';
import { createCar, deleteCar, getAllCars, updateCar, getCarById } from '../controllers/Controller';

const router = express.Router();

router.get('/', getAllCars);
router.get('/:id', getCarById);
router.post('/', createCar);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

export default router;