import type React from "react"

interface CarData {
  name: string;
  mph: number;
  gasLevel: number;
  temperature: number;
  zeroToSixty: number;
  lapTime: number;
}

// Define the CarDashboardProps interface
interface CarDashboardProps {
  carData: CarData;
}

// CarDashboard Component - Displays car statistics
const CarDashboard: React.FC<CarDashboardProps> = ({ carData }) => {
  // Helper function to format time into MM:SS.S
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = (seconds % 60).toFixed(1);
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.padStart(4, "0")}`;
  };

  return (
    // Main container for the dashboard, with padding and spacing
    <div className="p-6 space-y-6 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold mb-8 text-[#FDD023] drop-shadow-lg animate-fade-in-down">
        {carData.name.toUpperCase()} Dashboard
      </h1>

      {/* Main Gauges Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {/* Speed Gauge */}
        <div className="bg-[#461D7C] bg-opacity-50 border border-[#461D7C] rounded-xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="text-center p-4">
            <h2 className="text-white text-xl font-bold flex items-center justify-center gap-2">Speed</h2>
          </div>
          <div className="flex flex-col items-center space-y-4 p-4">
            <div className="text-7xl font-bold text-[#FDD023] animate-bounce-in">{carData.mph}</div>
            <div className="text-gray-300 text-lg">MPH</div>
          </div>
        </div>

        {/* Fuel Level Gauge */}
        <div className="bg-[#461D7C] bg-opacity-50 border border-[#461D7C] rounded-xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="text-center p-4">
            <h2 className="text-white text-xl font-bold flex items-center justify-center gap-2">Fuel Level</h2>
          </div>
          <div className="flex flex-col items-center space-y-4 p-4">
            <div className="text-7xl font-bold text-[#FDD023] animate-bounce-in">{carData.gasLevel}%</div>
            <div className="text-gray-300 text-lg">Fuel Remaining</div>
          </div>
        </div>

        {/* Engine Temperature Gauge */}
        <div className="bg-[#461D7C] bg-opacity-50 border border-[#461D7C] rounded-xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="text-center p-4">
            <h2 className="text-white text-xl font-bold flex items-center justify-center gap-2">Engine Temp</h2>
          </div>
          <div className="flex flex-col items-center space-y-4 p-4">
            <div className="text-7xl font-bold text-[#FDD023] animate-bounce-in">{carData.temperature}°C</div>
            <div className="text-gray-300 text-lg">Engine Temperature</div>
          </div>
        </div>
      </div>

      {/* Acceleration and Lap Time Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
        {/* 0-60 Acceleration */}
        {carData.zeroToSixty && (
          <div className="bg-[#461D7C] bg-opacity-50 border border-[#461D7C] rounded-xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="text-center p-4">
              <h2 className="text-white text-xl font-bold flex items-center justify-center gap-2">0-60 Acceleration</h2>
            </div>
            <div className="flex flex-col items-center space-y-4 p-4">
              <div className="text-7xl font-bold text-[#FDD023] animate-bounce-in">{carData.zeroToSixty}</div>
              <div className="text-gray-300 text-lg">Seconds</div>
            </div>
          </div>
        )}
        {carData.lapTime && (
          <div className="bg-[#461D7C] bg-opacity-50 border border-[#461D7C] rounded-xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="text-center p-4">
              <h2 className="text-white text-xl font-bold flex items-center justify-center gap-2">Best Lap Time</h2>
            </div>
            <div className="flex flex-col items-center space-y-4 p-4">
              <div className="text-7xl font-bold text-[#FDD023] animate-bounce-in">{formatTime(carData.lapTime)}</div>
              <div className="text-gray-300 text-lg">Minutes:Seconds</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDashboard