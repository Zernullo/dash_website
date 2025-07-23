/**
 * 🧩 THE PUZZLE BOARD
 * Where all your components connect:
 * - Header (always visible)
 * - Pages (change based on route)
 * - Footer (always at bottom)
 */

import { useState } from 'react';

import CarDashboard from './components/cardashboard' // Ensure this path is correct based on your setup
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter
} from './components/ui/Card'; // Adjust the path if your Card components are located elsewhere

// Define the CarData interface
interface CarData {
  name: string;
  mph: number;
  gasLevel: number;
  temperature: number;
  zeroToSixty: number;
  lapTime: number;
}

// Mock car data - numbers are static at 69, but now include zeroToSixty and lapTime
const App: React.FC = () => {
  // Mock car data - numbers are static at 69, but now include zeroToSixty and lapTime
  const mockCarData: CarData = {
    name: "rickymobile",
    mph: 69,
    gasLevel: 69,
    temperature: 69,
    zeroToSixty: 6.9,
    lapTime: 6.9,
  };

  const [carData] = useState<CarData>(mockCarData);

  return (
    // The main container for the application, setting the background and ensuring full height.
    <div className="min-h-screen bg-background text-foreground font-inter flex flex-col items-center py-12">
      <CarDashboard carData={carData} />

      <h2 className="text-4xl font-bold mt-20 mb-8 text-primary-foreground drop-shadow-lg">
        Example Card Components
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto px-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Your Dashboard</CardTitle>
            <CardDescription>
              This is a sample card demonstrating the reusable UI components.
            </CardDescription>
            <CardAction>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Action
              </button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              You can use these card components to display various pieces of information in a consistent and organized manner throughout your application.
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">Last updated: Just now</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Another Card Example</CardTitle>
            <CardDescription>
              Showcasing different content within the same card structure.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Feature 1: Responsive design</li>
              <li>Feature 2: Customizable styles</li>
              <li>Feature 3: Easy to integrate</li>
            </ul>
          </CardContent>
          <CardFooter>
            <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors">
              Learn More
            </button>
          </CardFooter>
        </Card>
      </div>

      <footer className="mt-20 text-muted-foreground text-sm">
        <p>&copy; 2025 Ricky's Custom Cars. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;