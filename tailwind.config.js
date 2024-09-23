// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige500: '#98908B',
        beige100: '#F8F4F0',
        grey900: '#201f24',
        grey500: '#696868',
        grey300: '#B3B3B3',
        grey100: '#f2f2f2',
        green: '#277c78',
        yellow: '#f2cdac',
        cyan: '#82c9d7',
        navy: '#626070',
        red: '#c94736',
        purple: '#826cb0',
        purpleOther: '#af81ba',
        turquiose: '#597c7c',
        brown: '#93674f',
        magenta: '#934f6f',
        blue: '#3f82b2',
        navyGrey: '#97a0ac',
        armyGreen: '#7f9161',
        gold: '#cab361',
        orange: '#be6c49',
        white: '#ffffff'
      },
      fontSize: {
        'preset-1': '32px',
        'preset-2': '20px',
        'preset-3': '16px',
        'preset-4': '14px',
        'preset-5': '12px',
      },
      lineHeight: {
        '120': '120%',
        '150': '150%',
      },
      letterSpacing: {
        '0': '0px',
      },
      fontFamily: {
        'public-sans': ['Public Sans', 'sans-serif'],
      },
      spacing: {
        '50': '4px',
        '100': '8px',
        '150': '12px',
        '200': '16px',
        '250': '20px',
        '300': '24px',
        '400': '32px',
        '500': '40px',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.text-preset-1': {
          fontSize: theme('fontSize.preset-1'),
          lineHeight: theme('lineHeight.120'),
          letterSpacing: theme('letterSpacing.0'),
          fontWeight: '700',
          fontFamily: theme('fontFamily.public-sans'),
        },
        '.text-preset-2': {
          fontSize: theme('fontSize.preset-2'),
          lineHeight: theme('lineHeight.120'),
          letterSpacing: theme('letterSpacing.0'),
          fontWeight: '700',
          fontFamily: theme('fontFamily.public-sans'),
        },
        '.text-preset-3': {
          fontSize: theme('fontSize.preset-3'),
          lineHeight: theme('lineHeight.150'),
          letterSpacing: theme('letterSpacing.0'),
          fontWeight: '700',
          fontFamily: theme('fontFamily.public-sans'),
        },
        '.text-preset-4': {
          fontSize: theme('fontSize.preset-4'),
          lineHeight: theme('lineHeight.150'),
          letterSpacing: theme('letterSpacing.0'),
          fontWeight: '400',
          fontFamily: theme('fontFamily.public-sans'),
        },
        '.text-preset-4-bold': {
          fontSize: theme('fontSize.preset-4'),
          lineHeight: theme('lineHeight.150'),
          letterSpacing: theme('letterSpacing.0'),
          fontWeight: '700',
          fontFamily: theme('fontFamily.public-sans'),
        },
        '.text-preset-5': {
          fontSize: theme('fontSize.preset-5'),
          lineHeight: theme('lineHeight.150'),
          letterSpacing: theme('letterSpacing.0'),
          fontWeight: '400',
          fontFamily: theme('fontFamily.public-sans'),
        },
        '.text-preset-5-bold': {
          fontSize: theme('fontSize.preset-5'),
          lineHeight: theme('lineHeight.150'),
          letterSpacing: theme('letterSpacing.0'),
          fontWeight: '700',
          fontFamily: theme('fontFamily.public-sans'),
        },
      };

      addUtilities(newUtilities, ['responsive']);
    },
  ],
}