/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '14%': '14%',
      },
      height: {
        'texturePick' : 'calc(100% + 112px)'
      }
    },
  },
  plugins: [],
}
