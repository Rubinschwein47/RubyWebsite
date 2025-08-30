import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import {use} from "react";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { files: ["**/*.md"], plugins: { markdown }, language: "markdown/gfm", extends: ["markdown/recommended"] },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
  {
    use: [{
      loader: require.resolve('eslint-loader'),
      options: {
        formatter: eslintFormatter,
        eslintPath: require.resolve('eslint'),
        emitWarning: true,
      }
    }],
    files: ["**/*.{ts,mts,cts,tsx}"],
    rules: {
      "@typescript-eslint/typedef": [
        "error",
        {
          "arrowParameter": false,
          "variableDeclaration": false,
          "propertyDeclaration": true,
          "memberVariableDeclaration": true,
          "parameter": true
        }
      ],
      "react/prop-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "semi": ["error", "always"],
      "max-len": ["error", { "code": 200 }]
    }
  },
]);
