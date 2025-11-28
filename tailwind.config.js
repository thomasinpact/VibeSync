/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#0D0D0F',
          surface: '#1A1A1D',
          text: '#F5F5F7',
          border: '#2A2A2E',
        },
      },
    },
  },
  plugins: [],
};
