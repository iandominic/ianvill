module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        tertiary: '#0F1A25',
      },
      fontFamily: {
        body: ['Montserrat'],
      },
      backgroundImage: {
        'hero-pattern': "url('/img/logo-change.png')",
        'footer-texture': "url('/img/bg_home.jpg')",
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
