// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
      backgroundImage: {
        'bgGradient': 'linear-gradient(to right, #1e1d22, #2a292f)',
      },
      colors: {
        primary: '#222221', 
        secondary: '#679c6e',
      },
    },
  },
  plugins: [],
};
