"use client"

import { useState } from "react"
import { CarDashboard } from "@/components/cardashboard" // Ensure this path is correct based on your setup

// Mock car data - numbers are static at 69, but now include zeroToSixty and lapTime
const mockCarData = {
  name: "rickymobile",
  mph: 69,
  gasLevel: 69,
  temperature: 69,
  zeroToSixty: 6.9,
  lapTime: 6.9,
}

export default function App() {
  const [carData] = useState(mockCarData)

  return (
    <div className="min-h-screen bg-black">
      <CarDashboard carData={carData} />
    </div>
  )
}
