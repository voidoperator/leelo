module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  overrides: [],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'no-restricted-syntax': 'off',
  },
};
