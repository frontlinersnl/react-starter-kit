module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin", "import"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "no-console": [
      "error",
      {
        allow: ["debug", "error"],
      },
    ],
    "no-eval": "error",
    "import/first": "error",
    camelcase: [
      "error",
      {
        ignoreImports: true,
        ignoreDestructuring: true,
      },
    ],
    "consistent-return": "warn",
    "comma-dangle": ["warn", "always-multiline"],
    "constructor-super": "error",
    curly: "error",
    "eol-last": "warn",
    eqeqeq: ["error", "smart"],
    "import/order": "always",
    "new-parens": "error",
    "no-debugger": "error",
    "no-fallthrough": "off",
    "max-len": [
      "warn",
      {
        code: 100,
      },
    ],
    "no-shadow": [
      "error",
      {
        hoist: "all",
      },
    ],
    "no-trailing-spaces": "warn",
    "no-underscore-dangle": "error",
    "no-unsafe-finally": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "prefer-arrow/prefer-arrow-functions": "off",
    "prefer-const": "error",
    radix: "off",
    "space-in-parens": ["off", "never"],
    quotes: [2, "double"],
  },
};
