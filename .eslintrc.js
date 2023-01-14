module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [],
  plugins: ['prettier'],
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
