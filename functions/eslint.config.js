module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
    },
    linterOptions: {
      globals: {},
    },
    rules: {
      "no-restricted-globals": ["error", "name", "length"],
      "prefer-arrow-callback": "error",
      "quotes": ["error", "double", { allowTemplateLiterals: true }],
    },
  },
  {
    files: ["**/*.spec.*"],
    languageOptions: {
      env: {
        mocha: true,
      },
    },
    rules: {},
  },
];
