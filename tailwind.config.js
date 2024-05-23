/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{,ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        bgcolor1: '#00010D',
        bgcolor2: '#0B1426',
        secondary: '#192959',
        terciary: '#9F96D9',
        textcolor: '#F2F2F2',
      }
    },
  },
  plugins: [],
}

