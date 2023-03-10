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
        'texturePick': 'calc(100% + 50px)',
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
      },
      boxShadow: {
        'forTopBlock' : 'rgba(69, 69, 69, 0.4) 0px 5px, rgba(69, 69, 69, 0.3) 0px 10px, rgba(69, 69, 69, 0.2) 0px 15px, rgba(69, 69, 69, 0.1) 0px 20px, rgba(69, 69, 69, 0.05) 0px 25px;',
        'forLeftBlockTwo' : 'rgba(188, 188, 188, 0.7) 0px 15px, rgba(188, 188, 188, 0.6) 0px 30px, rgba(188, 188, 188, 0.5) 0px 45px, rgba(188, 188, 188, 0.4) 0px 60px, rgba(188, 188, 188, 0.3) 0px 75px,     rgba(188, 188, 188, 0.7) 0px -15px, rgba(188, 188, 188, 0.6) 0px -30px, rgba(188, 188, 188, 0.5) 0px -45px, rgba(188, 188, 188, 0.4) 0px -60px, rgba(188, 188, 188, 0.3) 0px -75px,   rgba(188, 188, 188, 0.4) 5px 0px, rgba(188, 188, 188, 0.3) 10px 0px, rgba(188, 188, 188, 0.2) 15px 0px, rgba(188, 188, 188, 0.1) 20px 0px, rgba(188, 188, 188, 0.05) 25px 0px;',
        'forLeftBlockThree' : 'rgba(188, 188, 188, 0.4) 5px 0px, rgba(188, 188, 188, 0.3) 10px 0px, rgba(188, 188, 188, 0.2) 15px 0px, rgba(188, 188, 188, 0.1) 20px 0px, rgba(188, 188, 188, 0.05) 25px 0px;'
      }
    },
  },
  plugins: [],
}
