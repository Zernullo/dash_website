/**
 * 🎬 THE MOVIE DIRECTOR
 * This file STARTS everything:
 * 1. Grabs the HTML root ("app")
 * 2. Says "React, take over from here!"
 * (You almost never touch this file)
 */

import './assets/styles/globals.css' // Import global styles (like Tailwind CSS)
import React from 'react'; // Import React to use JSX
import ReactDOM from 'react-dom/client'; // Import ReactDOM to render components
import App from './App'; // Import the main App component

// This is where we tell React to take control of the "root" element in index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);