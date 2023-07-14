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
        '300' : '300px',
        '500' : '500px',
        '600' : '600px',
      },
      height: {
        'texturePick': 'calc(100% + 50px)',
        '2.5vw' : '2.5vw',
        '21' : '84px',
        '500': '500px',
        '600': '600px',
        '800': '800px',
        '400': '400px',
      },
      translate: {
        '120': '480px'
      },
      colors: {
        'firstcolor'  : '#FFFFFF',
        'secondcolor' : '#C6C6C6',
        'thirdcolor'  : '#919191',
        'fourthcolor' : '#282828',
      },
      backgroundColor: {
        'firstcolor'  : '#FFFFFF',
        'secondcolor' : '#C6C6C6',
        'thirdcolor'  : '#919191',
        'fourthcolor' : '#282828',
      },
      boxShadow: {
        'forTopBlock' : 'rgba(40, 40, 40, 0.4) 0px 5px, rgba(40, 40, 40, 0.3) 0px 10px, rgba(40, 40, 40, 0.2) 0px 15px, rgba(40, 40, 40, 0.1) 0px 20px, rgba(40, 40, 40, 0.05) 0px 25px;',
        'forLeftBlockTwo' : 'rgba(255, 255, 255, 0.7) 0px 15px, rgba(255, 255, 255, 0.6) 0px 30px, rgba(255, 255, 255, 0.5) 0px 45px, rgba(255, 255, 255, 0.4) 0px 60px, rgba(255, 255, 255, 0.3) 0px 75px,     rgba(255, 255, 255, 0.7) 0px -15px, rgba(255, 255, 255, 0.6) 0px -30px, rgba(255, 255, 255, 0.5) 0px -45px, rgba(255, 255, 255, 0.4) 0px -60px, rgba(255, 255, 255, 0.3) 0px -75px,   rgba(255, 255, 255, 0.4) 5px 0px, rgba(255, 255, 255, 0.3) 10px 0px, rgba(255, 255, 255, 0.2) 15px 0px, rgba(255, 255, 255, 0.1) 20px 0px, rgba(255, 255, 255, 0.05) 25px 0px;',
        'forLeftBlockThree' : 'rgba(255, 255, 255, 0.4) 5px 0px, rgba(255, 255, 255, 0.3) 10px 0px, rgba(255, 255, 255, 0.2) 15px 0px, rgba(255, 255, 255, 0.1) 20px 0px, rgba(255, 255, 255, 0.05) 25px 0px;'
      },
    },
    zIndex: {
      '100': '100',
      '200': '200',
      '60' : '60',
      '30' : '30',
    },
  },
  plugins: [],
}
