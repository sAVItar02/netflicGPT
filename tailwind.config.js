/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "martel": ["Martel Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}