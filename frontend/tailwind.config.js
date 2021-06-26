module.exports = {
  purge: ['./src/**/*.{tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        200: '50rem',
      },
      height: {
        200: '50rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
