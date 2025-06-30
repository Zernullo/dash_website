/**
 * 🧩 THE PUZZLE BOARD
 * Where all your components connect:
 * - Header (always visible)
 * - Pages (change based on route)
 * - Footer (always at bottom)
 */

import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:5000')
      .then(res => res.text())
      .then(text => setMessage(text))
      .catch(() => setMessage('Failed to connect to backend'));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Tailwind-styled header */}
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Hello from frontend!
      </h1>
      
      {/* Backend message with Tailwind */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg">
          <span className="font-semibold">Backend says:</span> 
          <span className="text-gray-700 ml-2">{message}</span>
        </p>
      </div>

      {/* Optional styled button */}
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        onClick={() => window.location.reload()}
      >
        Refresh Data
      </button>
    </div>
  );
}

export default App;