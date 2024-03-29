module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'no-trailing-spaces': 'off', // Trailing spaces allowed 
    'no-multi-spaces': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
