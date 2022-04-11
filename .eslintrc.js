module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    "ecmaVersion": '2020',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'linebreak-style': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'no-unused-expressions': 'off',
    'camelcase': 'off',
  },
};
