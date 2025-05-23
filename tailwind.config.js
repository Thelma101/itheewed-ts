/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00838F',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'Inter', 'sans-serif'],
      },
      fontSize: {
        base: ['14px', { lineHeight: '100%', letterSpacing: '0%' }],
      }
    },
    plugins: [],
  }
}