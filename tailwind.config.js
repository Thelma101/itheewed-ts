/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },

      animation: {
        'reveal': 'reveal 0.5s ease-out forwards',
      },
      keyframes: {
        reveal: {
          '0%': { 
            opacity: 0,
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
          },
          '100%': { 
            opacity: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
          }
        },
      },

    },
    plugins: [],
  }
};