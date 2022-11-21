/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js,tsx}", "./src/Components/**/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        defaultGradient: 'linear-gradient(115deg, #04df00, #00f0ff)',
      },
      colors: {
        defaultGradientFrom: '#04df00',
        defaultGradientTo: '#00f0ff',
      },
      fontFamily: {
        'Arab': 'Ariblk, sans-serif',
      },
      fontSize: {
        'header': ['72px', '1.2em'],
      }
    },
  },
  plugins: [
      plugin(function ({ addBase, addComponents, addUtilities, theme }) {
        addComponents({
          '.text__fill': {
            '-webkit-text-fill-color': 'transparent',
            'background-clip': 'text',
            'background-color': 'inherit',
          },
          '.default__gradient': {
            'background': 'linear-gradient(115deg, #04df00, #00f0ff)',
          },

          '.default__border__gradient': {
            'background-image': 'linear-gradient(115deg, #04df00, #00f0ff)',
            'background-size':'101% 101%',
            'background-position':'0 0 0 0',
            'background-repeat':'no-repeat',
            'border-radius': '0.3rem',
          },
          '.black__gradient': {
            'background-image': 'linear-gradient(115deg, #565656, black)',
          },
          '.open__bg__img': {
            'background-image': 'linear-gradient(180deg, transparent, #0e0e0e 66%), url(https://assets.website-files.com/6108ec71509c2e511129cda8/6109237e4f086d6c2ff735fa_main-image.png)',
            'background-size':  'auto, contain',
            'background-repeat': 'repeat, no-repeat',
          },
          '.svg__gradient__from': {
            'stop-color': theme('colors.defaultGradientFrom')
          },
          '.svg__gradient__to': {
            'stop-color': theme('colors.defaultGradientTo')
          },
        })
      })
  ]
  ,
}
