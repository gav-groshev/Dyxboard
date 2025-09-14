import typescriptEslintParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptEslintParser, // импортированный объект, а не строка
      parserOptions: {
        ecmaVersion: 2025,
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      "prettier": prettierPlugin
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: true,
          trailingComma: "all",
          printWidth: 100,
          endOfLine: "auto"
        }
      ],
      "react-refresh/only-export-components": "off"
    }
  }
];
