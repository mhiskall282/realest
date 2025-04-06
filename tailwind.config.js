/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700',
          dark: '#B8860B',
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          light: '#2D2D2D',
        },
        accent: {
          DEFAULT: '#E6B8AF',
          dark: '#C27BA0',
        }
      }
    },
  },
  plugins: [],
};