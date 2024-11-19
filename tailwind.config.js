/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter','serif'],
      },
      colors: {
        'main-Blue': '#010a2e',
        'main-Orange' : '#f96d00',
        'main-Cyne' : '#00bbf0',
        'light-Cyne' : '#00bbf0',
      }
    },
  },
  plugins: [],
};
