/* eslint-disable no-param-reassign */
/* eslint-disable global-require */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,jsx,js}', './src/**/*.{html,jsx,js}'],
  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
    }),
    boxShadow: {
      xs: '0 1px 0 rgba(0 ,0 ,0 , 0.08)',
      sm: '0 1px 2px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.24)',
      DEFAULT: '0 2px 16px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0.32)',
      lg: '0 8px 24px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      b: 'inset 0 -1px 0 rgba(0, 0, 0, 0.08)',
      inset: 'inset 0 4px 4px rgba(0, 0, 0, 0.25)',
      none: 'none',
      switch: '1px 0 1px rgba(0, 0, 0, 0.08), 0 0 3px rgba(0, 0, 0, 0.24)',
      'switch-hover':
        '2px 0 3px rgba(0, 0, 0, 0.16), 0 0 3px rgba(0, 0, 0, 0.24)',
      'pinned-left': '1px 0px 0px 0px rgba(55, 65, 81, 16%)',
      'pinned-left-raised':
        '2px 0px 5px -1px rgba(55, 65, 81, 20%), 1px 0px 2px -1px rgba(0, 0, 0, 25%)',
      'pinned-right': '-1px 0px 0px 0px rgba(55, 65, 81, 12%)',
      'pinned-right-raised':
        '-2px 0px 5px -1px rgba(55, 65, 81, 20%), -1px 0px 2px -1px rgba(0, 0, 0, 25%)',
      'pinned-bottom': '0 -1px 0px 0px rgba(55, 65, 81, 16%)',
      'pinned-bottom-raised':
        '0 -2px 5px -1px rgba(55, 65, 81, 20%), 0 -1px 2px -1px rgba(0, 0, 0, 25%)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      highlight: 'highlight',
      inherit: 'inherit',
      black: {
        DEFAULT: '#000000',
        high: colors.gray['900'],
        medium: colors.gray['500'],
        low: colors.gray['400'],
      },
      white: {
        DEFAULT: '#ffffff',
        high: 'rgba(255, 255, 255, 1)',
        medium: 'rgba(255, 255, 255, 0.64)',
        low: 'rgba(255, 255, 255, 0.38)',
      },
      slate: colors.slate,
      gray: {
        25: '#FCFCFD',
        ...colors.gray,
      },
      neutral: {
        25: '#FCFCFC',
        ...colors.zinc,
      },
      red: {
        high: '#B31B34',
        ...colors.red,
      },
      orange: colors.orange,
      green: {
        600: '#1d6f42',
        ...colors.green,
      },
      blue: {
        50: '#F4F9FF',
        100: '#E9F4FE',
        200: '#C7E3FE',
        300: '#A5D3FD',
        400: '#62B1FB',
        500: '#1F90F9',
        600: '#1C82E0',
        700: '#176CBB',
        800: '#135695',
        900: '#0F477A',
      },
      indigo: colors.indigo,
      violet: colors.violet,
      cyan: colors.cyan,
      lime: colors.lime,
      yellow: colors.yellow,
      emerald: colors.emerald,
      teal: colors.teal,
      stone: colors.stone,
    },
    fontSize: {
      inherit: 'inherit',
      xxs: [
        '0.6875rem',
        {
          letterSpacing: '0.05em',
          lineHeight: '1rem',
        },
      ],
      xs: [
        '0.75rem',
        {
          lineHeight: '1rem',
        },
      ],
      sm: [
        '0.875rem',
        {
          lineHeight: '1.25rem',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      lg: [
        '1.25rem',
        {
          lineHeight: '1.75rem',
        },
      ],
      xl: [
        '1.5rem',
        {
          lineHeight: '1.75rem',
        },
      ],
    },
    screens: {
      sm: '1024px',
      md: '1440px',
      lg: '1600px',
      xl: '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      height: {
        stretch: 'stretch',
      },
      maxHeight: {
        '1/3': '33%',
      },
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      width: {
        '1/8': '12.5%',
        '1/10': '10%',
        88: '22rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@thoughtbot/tailwindcss-aria-attributes'),
    plugin(({ addVariant }) => {
      addVariant('sibling-checked', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `:checked ~ .sibling-checked\\:${rule.selector.slice(
            1
          )}`;
        });
      });
      addVariant('sibling-unchecked', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `:not(:checked) ~ .sibling-unchecked\\:${rule.selector.slice(
            1
          )}`;
        });
      });
    }),
  ],
};
