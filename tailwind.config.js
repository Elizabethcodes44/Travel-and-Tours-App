/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./Components/**/*.{js,jsx}",
    
  ],
  theme: {
    extend: {
      colors:{
        brown: '#411900',
        cream: '#f7f6e7',
        darkgrey: '#111827',
      }
    },
  },
  plugins: [],
}

