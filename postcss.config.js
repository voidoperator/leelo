/* eslint-disable global-require */
module.exports = {
  plugins: [
    require('postcss-inline-svg'),
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({
      features: {
        'font-variant-property': false,
      },
      autoprefixer: {
        flexbox: 'no-2009',
      },
    }),
  ],
};
