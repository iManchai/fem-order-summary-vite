/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        100: 'hsl(225, 100%, 94%)',
        200: 'hsl(245, 75%, 52%)',
        300: 'hsl(245, 75%, 70%)'
      },
      neutrals: {
        100: 'hsl(225, 100%, 100%)',
        200: 'hsl(225, 100%, 98%)',
        300: 'hsl(224, 23%, 55%)',
        400: 'hsl(223, 47%, 23%)'
      }
    },
    fontFamily: {
      main: ['Red Hat Display', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
