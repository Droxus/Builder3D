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
        '120': '480px',
        '2.5vw' : '2.5vw'
      },
      height: {
        'texturePick': 'calc(100% + 112px)',
        '2.5vw' : '2.5vw'
      },
      translate: {
        '120': '480px'
      }
    },
  },
  plugins: [],
}
