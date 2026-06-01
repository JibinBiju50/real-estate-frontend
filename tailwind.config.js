/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#1A1A1A",
        gold: "#C8A97E",
        light: "#F8F8F8",
        muted: "#B0B0B0"
      },
      fontFamily:{
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}