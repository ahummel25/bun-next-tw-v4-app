module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  root: true,
  parser: "@typescript-eslint/parser", // Set parser globally for TypeScript

  // Extensions to cover all common ESLint plugins
  extends: [
    "next/core-web-vitals", // Core rules for Next.js + React
    "plugin:react/recommended", // Best practices for React
    "plugin:@typescript-eslint/recommended", // Best practices for TypeScript
    "plugin:@tanstack/eslint-plugin-query/recommended", // TanStack Query plugin
    "plugin:jest/recommended", // Jest plugin for test linting
    "plugin:jest/style", // Recommended Jest styling rules
    "prettier", // Disable ESLint rules that conflict with Prettier
    "plugin:jsx-a11y/recommended", // Accessibility plugin for JSX
  ],

  plugins: [
    "@stylistic",
    "@typescript-eslint", // TypeScript linting
    "@tanstack/query", // TanStack Query linting
    "jest", // Jest linting
    "jsx-a11y", // Accessibility for JSX
  ],

  rules: {
    // General best practices
    "no-console": "warn", // Warn on console usage
    semi: ["error", "never"], // No semicolons (consistent with Prettier setup)

    // React-specific rules
    "react/react-in-jsx-scope": "off", // Not needed for Netailwindcss/recommendedxt.js
    "react/jsx-key": "warn", // Warn on missing keys in lists
    "react/prop-types": "off", // Turn off prop-types since TypeScript is used
    "react/jsx-uses-react": "off", // Not needed in React 18+
    "react/display-name": "off", // Not needed with function components

    // TypeScript-specific rules
    "@typescript-eslint/explicit-function-return-type": "off", // Do not enforce return types for better dev experience
    "@typescript-eslint/no-explicit-any": "warn", // Avoid `any` but allow with a warning
    "@typescript-eslint/ban-ts-comment": "warn", // Allow @ts-ignore comments with a warning
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],

    // Stylistic rules (via @stylistic plugin)
    "@stylistic/quotes": ["error", "single", { allowTemplateLiterals: true }], // Enforce single quotes but allow template literals
    "@stylistic/comma-dangle": ["error", "never"], // No dangling commas
    "@stylistic/semi": ["error", "never"], // No semicolons (consistent with Prettier setup)

    // Jest-specific rules
    "jest/no-disabled-tests": "warn", // Warn if tests are disabled
    "jest/no-focused-tests": "error", // Error if `it.only` or `describe.only` is used
    "jest/no-identical-title": "error", // Error on identical test titles

    // Disable the @next/next/no-duplicate-head rule
    "@next/next/no-duplicate-head": "off",
    "@next/next/no-html-link-for-pages": "off", // For app directory
  },

  settings: {
    // Jest settings
    jest: {
      version: 29, // Make sure the Jest plugin knows the correct version of Jest
    },

    // Next.js settings
    next: {
      rootDir: ["./"], // Project root for Next.js
    },

    // React settings
    react: {
      version: "detect", // Automatically detect React version
    },
  },

  // Overrides for specific file types
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // TypeScript-specific files
      parser: "@typescript-eslint/parser", // Use TypeScript parser for .ts/.tsx
      rules: {
        // Custom TypeScript rules here if needed
      },
    },
    {
      files: ["*.test.ts", "*.test.tsx"], // Jest-specific files
      env: {
        jest: true, // Ensure Jest environment is enabled for test files
      },
    },
    {
      files: ["src/app/**/*.tsx", "src/app/**/*.ts"],
      rules: {
        "@next/next/no-duplicate-head": "off",
        "react/no-unescaped-entities": "off",
      },
    },
  ],

  env: {
    browser: true, // Browser environment
    node: true, // Node.js environment
    es2021: true, // Enable ES2021 features
  },
};
