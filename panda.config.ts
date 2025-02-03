import { defineConfig } from "@pandacss/dev";
import * as tokens from "./src/styles";

import * as recipes from "./src/components/recipes";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: ["@pandacss/preset-base"],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.stories.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: { ...tokens },
      textStyles: tokens.textStyles,
    },
    recipes,
  },

  outExtension: "js",

  staticCss: {
    recipes: "*",
  },

  jsxFramework: "react",
  jsxStyleProps: "none",

  // styled-system/jsx의 styled가 사라지는 문제로 인해 사용 X
  // jsxFactory: 'vapor',

  // The output directory for your css system
  outdir: "src/styled-system",
});
