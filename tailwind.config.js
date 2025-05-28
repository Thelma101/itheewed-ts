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
        'type': 'type 0.1s steps(1) forwards',
        'blink': 'blink 1s infinite'
      },
      keyframes: {
        type: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        }
      }


    },
    plugins: [],
  }
};