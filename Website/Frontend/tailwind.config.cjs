/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Essential for Vite projects
    "./src/**/*.{js,jsx,ts,tsx}", // Covers all JS/TS/JSX/TSX files in src
    "*.{js,ts,jsx,tsx,mdx}", // Additional content types
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Custom theme extensions can be added here
    },
  },
  plugins: [], // Plugins can be added here if needed
};
