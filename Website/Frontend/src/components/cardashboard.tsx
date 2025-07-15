import type React from "react"

interface CarData {
  name: string
  mph: number
  gasLevel: number
  temperature: number
  zeroToSixty: number
  lapTime: number
}

interface CarDashboardProps {
  carData: CarData
}

const Cardashboard: React.FC<CarDashboardProps> = ({ carData }) => {
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = (seconds % 60).toFixed(1)
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.padStart(4, "0")}`
  }

  return (
    <div className="p-6 space-y-6">
      {/* Main Gauges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Speed */}
        <div className="bg-[#461D7C] bg-opacity-50 border border-[#461D7C] rounded-lg p-4">
          <div className="text-center p-4">
            <h2 className="text-white text-xl font-bold flex items-center justify-center gap-2">Speed</h2>
          </div>
          <div className="flex flex-col items-center space-y-4 p-4">
            <div className="text-6xl font-bold text-[#FDD023]">{carData.mph}</div>
            <div className="text-gray-400 text-lg">MPH</div>
          </div>
        </div>
        {/* Fuel Level */}
        <div className="bg-[#461D7C] bg-opacity-50 border border-[#461D7C] rounded-lg p-4">
          <div className="text-center p-4">
            <h2 className="text-white text-xl font-bold flex items-center justify-center gap-2">Fuel Level</h2>
          </div>
          <div className="flex flex-col items-center space-y-4 p-4">
            <div className="text-6xl font-bold text-[#FDD023]">{carData.gasLevel}%</div>
            <div className="text-gray-400 text-lg">Fuel Remaining</div>
          </div>
        </div>
        {/* Engine Temp */}
        <div className="bg-[#461D7C] bg-opacity-50 border border-[#461D7C] rounded-lg p-4">
          <div className="text-center p-4">
            <h2 className="text-white text-xl font-bold flex items-center justify-center gap-2">Engine Temp</h2>
          </div>
          <div className="flex flex-col items-center space-y-4 p-4">
            <div className="text-6xl font-bold text-[#FDD023]">{carData.temperature}°C</div>
            <div className="text-gray-400 text-lg">Engine Temperature</div>
          </div>
        </div>
      </div>
      {/* acceleration and 0 to sixty and laptime */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {carData.zeroToSixty && (
          <div className="bg-[#461D7C] bg-opacity-50 border border-[#461D7C] rounded-lg p-4">
            <div className="text-center p-4">
              <h2 className="text-white text-xl font-bold flex items-center justify-center gap-2">0-60 Acceleration</h2>
            </div>
            <div className="flex flex-col items-center space-y-4 p-4">
              <div className="text-6xl font-bold text-[#FDD023]">{carData.zeroToSixty}</div>
              <div className="text-gray-400 text-lg">Seconds</div>
            </div>
          </div>
        )}
        {carData.lapTime && (
          <div className="bg-[#461D7C] bg-opacity-50 border border-[#461D7C] rounded-lg p-4">
            <div className="text-center p-4">
              <h2 className="text-white text-xl font-bold flex items-center justify-center gap-2">Best Lap Time</h2>
            </div>
            <div className="flex flex-col items-center space-y-4 p-4">
              <div className="text-6xl font-bold text-[#FDD023]">{formatTime(carData.lapTime)}</div>
              <div className="text-gray-400 text-lg">Minutes:Seconds</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cardashboard
