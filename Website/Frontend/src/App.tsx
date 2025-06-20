/**
 * 🧩 THE PUZZLE BOARD
 * Where all your components connect:
 * - Header (always visible)
 * - Pages (change based on route)
 * - Footer (always at bottom)
 */

import { useState, useEffect } from 'react';

// React component
function App() {
  // Common mistake: Forgetting to handle loading/error states
  const [message, setMessage] = useState('Loading...');

  // Fetch data from backend when component mounts
  useEffect(() => {
    fetch('http://localhost:5000')
      .then(res => res.text())
      .then(text => setMessage(text))
      .catch(() => setMessage('Failed to connect to backend'));
  }, []);

  return (
    <div>
      <h1>Hello from frontend!</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App; // Export the App component so it can be used in main.tsx