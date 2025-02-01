import js from "@eslint/js";
import path from "node:path";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import panda from "@pandacss/eslint-plugin";

export default tseslint.config(
  { ignores: ["dist", "**/*.d.ts", "styled-system", "node_modules"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@pandacss": panda,
    },
    settings: {
      "@pandacss/configPath": path.join("./panda.config.ts"),
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // padnacss rules
      "@pandacss/no-debug": "error",
      ...panda.configs.recommended.rules,
      "@pandacss/no-config-function-in-source": "off",

      // typescripts
      "@typescript-eslint/no-empty-object-type": "off",
    },
  }
);
