module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["jsx-a11y", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }]
  },
  env: {
    browser: true,
    es2020: true,
    amd: true,
    node: true
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
