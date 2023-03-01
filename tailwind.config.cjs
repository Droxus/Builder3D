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
        '120': '480px'
      },
      height: {
        'texturePick': 'calc(100% + 112px)'
      },
      translate: {
        '120': '480px'
      }
    },
  },
  plugins: [],
}
