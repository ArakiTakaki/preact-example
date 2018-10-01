module.exports = {
  extends: "eslint:recommended",
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "no-console": "off",
    "no-empty-pattern": "off",
    "linebreak-style": ["error", "unix"],
    "react/jsx-no-bind": ["error", { "ignoreRefs": true }],
    "react/jsx-no-duplicate-props": "error",
    "react/self-closing-comp": "error",
    "react/prefer-es6-class": "error",
    "react/no-string-refs": "error",
    "react/require-render-return": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
  plugins: [
    "react"
  ],
  settings: {
    react: {
      pragma: "h"
    }
  }
}