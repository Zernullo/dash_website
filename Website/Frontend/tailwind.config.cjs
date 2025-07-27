module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tells Tailwind where to scan
  ],
  theme: {
    screens: {
      md: '768px', // Should exist by default
    },
    extend: {},
  },
  plugins: [],
}