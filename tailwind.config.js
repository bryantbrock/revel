const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#454545',
      white: '#ffffff',
      gray: {
        100: '#EAEAEA',
        200: 'EBEBEB',
      },
      borderRadius: {
        'none': '0',
        'sm': '.25rem',
        DEFAULT: '.5rem',
        'lg': '2rem',
        'full': '9999px',
      },
      fontFamily: {
        sans: [
          'Open Sans',
          ...defaultTheme.fontFamily.sans,
        ]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
