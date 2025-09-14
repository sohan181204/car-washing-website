/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E53935',
        secondary: '#B0BEC5',
        background: '#000000',
        content: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Montserrat', 'Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
