/**
 * 🧩 THE PUZZLE BOARD
 * Where all your components connect:
 * - Header (always visible)
 * - Pages (change based on route)
 * - Footer (always at bottom)
 */

import { useState, useEffect } from 'react';
import CarDashboard from './components/cardashboard';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter
} from './components/ui/Card';

interface CarData {
  name: string;
  mph: number;
  gasLevel: number;
  temperature: number;
  zeroToSixty: number;
  lapTime: number;
}

const App: React.FC = () => {
  const mockCarData: CarData = {
    name: "rickymobile",
    mph: 69,
    gasLevel: 69,
    temperature: 69,
    zeroToSixty: 6.9,
    lapTime: 6.9,
  };

  const [carData] = useState<CarData>(mockCarData);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check system preference and localStorage on initial load
    const savedPreference = localStorage.getItem('darkMode');
    return savedPreference !== null 
      ? savedPreference === 'true'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode class and save preference
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  // Listen for system preference changes (only if no user preference)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('darkMode')) {
        setIsDarkMode(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter flex flex-col items-center py-12 relative">
      {/* Dark Mode Toggle Button - Top Right Corner */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors shadow-lg"
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? (
          <span className="text-[30px]">☀️</span>
        ) : (
          <span className="text-[30px]">🌙</span>
        )}
      </button>

      <CarDashboard carData={carData} />

      <h2 className="text-4xl font-bold mt-20 mb-8 text-primary-foreground drop-shadow-lg">
        Example Card Components
      </h2>
      
      <div className="grid grid-cols-1 gap-6 w-full max-w-4xl mx-auto px-6">
        <Card>
          <CardHeader>
            <CardTitle className="pl-[10px]">Welcome to Your Dashboard</CardTitle>
            <CardDescription className="pl-[10px]">
              This is a sample card demonstrating the reusable UI components.
            </CardDescription>
            <CardAction className="pl-[10px]">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Action
              </button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground pl-[10px]">
              Current mode: {isDarkMode ? 'Dark' : 'Light'}
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground pl-[10px]">Last updated: Just now</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="pl-[10px]">Dark Mode Settings</CardTitle>
            <CardDescription className="pl-[10px]">
              Control your viewing preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 pl-[10px]">
              <button
                onClick={() => setIsDarkMode(false)}
                className={`px-4 py-2 rounded-md ${!isDarkMode ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
              >
                Light
              </button>
              <button
                onClick={() => setIsDarkMode(true)}
                className={`px-4 py-2 rounded-md ${isDarkMode ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
              >
                Dark
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="mt-20 text-muted-foreground text-sm">
        <p>&copy; 2025 Ricky's Custom Cars. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;