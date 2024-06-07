module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
        'xl': {'max': '1279px'},
        'lg': {'max': '1023px'},
        'md': {'max': '767px'},
        'sm': {'max': '639px'},
      },
      colors: {
        primary: '#00FF50',
        secondary: '#1E1E1E',
        grayD2: '#D2D2D2',
        gray96: '#969696',
        grayF8: '#F8F8F8',
        gray8E: '#8E8E8E',
        redDC: '#DC0000',
        redED: '#ED8080',
        primaryVariant: '#80FFA7'
      },
      boxShadow: {
        'ctz1': '0px 8px 24px 0px #1E1E1E1A',
      }
    },
  },
  variants: {},
  plugins: [],
}
