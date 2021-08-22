module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: ["@typescript-eslint", "import", "prettier"],
  rules: {
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
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
};
