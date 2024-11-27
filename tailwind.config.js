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
        'main-Blue': '#000',
        'main-Blue-2': '#021b27',
        'dark-blue': '#021b2771', 
        'main-Orange' : '#f96d00',
        'main-Cyne' : '#00bbf0',
        'light-Cyne' : '#00bbf0',
        'shadow-Cyne' : '#00bcf06c',
        'comp-black' : '#0002033d',
        'new-bg-prime' : '#020306',
        'new-bg-second' : '#060608',
        'new-bg-third' : '#20202c',
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [],
};
