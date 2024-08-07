/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./Components/**/*.{js,jsx}",
    
  ],
  theme: {
    extend: {
      colors:{
        brown: '#681a1e',
        cream: '#f7f6e7',
      }
    },
  },
  plugins: [],
}

