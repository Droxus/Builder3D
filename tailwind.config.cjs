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
        '2.5vw' : '2.5vw',
        '300' : '300px'
      },
      height: {
        'texturePick': 'calc(100% + 112px)',
        '2.5vw' : '2.5vw',
        '21' : '84px'
      },
      translate: {
        '120': '480px'
      },
      colors: {
        'firstcolor'  : '#BCBCBC',
        'secondcolor' : '#000000',
        'thirdcolor'  : '#FFFFFF',
        'fourthcolor' : '#454545',
      },
      backgroundColor: {
        'firstcolor'  : '#BCBCBC',
        'secondcolor' : '#000000',
        'thirdcolor'  : '#FFFFFF',
        'fourthcolor' : '#454545',
      }
    },
  },
  plugins: [],
}
