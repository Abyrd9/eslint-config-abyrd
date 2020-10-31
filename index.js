module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    amd: true,
    node: true,
    es2021: true,
    browser: true,
    commonjs: true,
    serviceworker: true
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "prettier"],
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
  settings: {
    react: {
      version: "detect"
    }
  }
};
