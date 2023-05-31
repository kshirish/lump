module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [/*'eslint:recommended'*/ 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // 'react/sort-prop-types': [
    //   2,
    //   {
    //     callbacksLast: true,
    //     sortShapeProp: true,
    //     noSortAlphabetically: false,
    //   },
    // ],
    // 'react/jsx-sort-props': [
    //   2,
    //   {
    //     callbacksLast: true,
    //     shorthandFirst: false,
    //     shorthandLast: true,
    //     noSortAlphabetically: false,
    //     reservedFirst: true,
    //   },
    // ],
  },
};
