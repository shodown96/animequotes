/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0B4945' },
        secondary: { DEFAULT: '#E1E84A' },
        light: '#D9DFDD',
        greyed: "#E6EAE8",
      },
      fontFamily: {
        sat: ['Satoshi', 'sans-serif'],
        int: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}