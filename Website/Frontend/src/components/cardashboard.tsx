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
    <div className="w-[90%] max-w-screen-xl p-6 space-y-6 flex flex-col items-center justify-center mx-auto">
      <h1 className="text-[50px] p-[30px] font-extrabold mb-8 text-[#FDD023] drop-shadow-lg animate-fade-in-down">
        {carData.name.toUpperCase()} Dashboard
      </h1>

      {/* Main Gauges Section */}
      <div className="grid grid-cols-2 gap-[50px] w-full max-w-6xl mx-auto">
        {/* Speed Gauge */}
        <div className="bg-[#7f4bc3] h-[200px] bg-opacity-50 border-5 border-blue-500 rounded-xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center">  
          <div className="text-center p-4">
            <h2 className="text-white text-[40px] font-bold flex items-center justify-center gap-2">Speed</h2>
          </div>
          <div className="flex flex-col items-center space-y-4 p-4">
            <div className="text-[50px] font-bold text-[#FDD023] animate-bounce-in">{carData.mph}</div>
            <div className="text-gray-300 text-[30px]">MPH</div>
          </div>
        </div>

        {/* Fuel Level Gauge */}
        <div className="bg-[#7f4bc3] h-[200px] bg-opacity-50 border-5 border-blue-500 rounded-xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center">  
          <div className="text-center p-4">
            <h2 className="text-white text-[40px] font-bold flex items-center justify-center gap-2">Fuel Level</h2>
          </div>
          <div className="flex flex-col items-center space-y-4 p-4">
            <div className="text-[50px] font-bold text-[#FDD023] animate-bounce-in">{carData.gasLevel}%</div>
            <div className="text-gray-300 text-[30px]">Fuel Remaining</div>
          </div>
        </div>

        {/* Engine Temperature Gauge */}
        <div className="bg-[#7f4bc3] h-[200px] bg-opacity-50 border-5 border-blue-500 rounded-xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center">
          <div className="text-center p-4">
            <h2 className="text-white text-[40px] font-bold flex items-center justify-center gap-2">Engine Temp</h2>
          </div>
          <div className="flex flex-col items-center space-y-4 p-4">
            <div className="text-[50px] font-bold text-[#FDD023] animate-bounce-in">{carData.temperature}°C</div>
            <div className="text-gray-300 text-[30px]">Engine Temperature</div>
          </div>
        </div>

        {/* Acceleration and Lap Time Section */}
        {/* 0-60 Acceleration */}
        {carData.zeroToSixty && (
          <div className="bg-[#7f4bc3] overflow-auto h-[200px] bg-opacity-50 border-5 border-blue-500 rounded-xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center">  
            <div className="text-center p-4">
              <h2 className="text-white text-[40px] font-bold flex items-center justify-center gap-2">Acceleration (0-60)</h2>
            </div>
            <div className="flex flex-col items-center space-y-4 p-4">
              <div className="text-[50px] font-bold text-[#FDD023] animate-bounce-in">{carData.zeroToSixty}</div>
              <div className="text-gray-300 text-[30px]">Seconds</div>
            </div>
          </div>
        )}
        {carData.lapTime && (
          <div className="bg-[#7f4bc3] h-[200px] bg-opacity-50 border-5 border-blue-500 rounded-xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center">  
            <div className="text-center p-4">
              <h2 className="text-white text-[40px] font-bold flex items-center justify-center gap-2">Best Lap Time</h2>
            </div>
            <div className="flex flex-col items-center space-y-4 p-4">
              <div className="text-[50px] font-bold text-[#FDD023] animate-bounce-in">{formatTime(carData.lapTime)}</div>
              <div className="text-gray-300 text-[30px]">Minutes:Seconds</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDashboard