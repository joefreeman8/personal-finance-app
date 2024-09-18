// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        publicSans: ['Public Sans', 'sans-serif']
      },
      fontWeight: {
        'regular': 400,
        'bold': 700
      },


      colors: {
        beige500: '#98908B',
        beige100: '#F8F4F0',
        grey900: '#201f24',
        grey500: '#696868',
        grey300: '#B3B3B3',
        grey100: '#f2f2f2',
        greenSecondary: '#277c78',
        yellowSeconday: '#f2cdac',
        cyanSecondary: '#82c9d7',
        navySecondary: '#6262070',
        redSecondary: '#c94736',
        purpleSecondary: '#826cb0',
        purpleOther: '#af81ba',
        turquioseOther: '#597c7c',
        brownOther: '#93674f',
        magentaOther: '#934f6f',
        blueOther: '#3f82b2',
        navyGreyOther: '#97a0ac',
        armyGreenOther: '#7f9161',
        goldOther: '#cab361',
        orangeOther: '#be6c49',
        white: '#ffffff'


      },
    },
  },
  plugins: [],
}
