/* eslint-env node*/
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "google",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": [0],
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-extra-semi": ["warn"],
    "object-curly-spacing": ["error", "always"],
    "no-alert": ["error"],
    "no-console": "warn",
    "no-shadow": ["error", { builtinGlobals: true }],
    "max-len": ["warn", 160],
    "prettier/prettier": ["error"],
    "quotes": ["error", "double"],
    "quote-props": ["error", "consistent"],
    "require-jsdoc": "off",
    "valid-jsdoc": "off",

  },
  globals: {
    React: "writable",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
