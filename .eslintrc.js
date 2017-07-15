module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],

  plugins: ['react'],

  env: { es6: true },

  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    }
  }
};
