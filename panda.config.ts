import { defineConfig } from "@pandacss/dev";
import { buttonRecipe } from "./src/components/button/button.recipe";
import * as tokens from "./src/styles";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: ["@pandacss/preset-base"],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: { ...tokens },
      textStyles: tokens.textStyles,
    },
    recipes: {
      button: buttonRecipe,
    },
  },

  staticCss: {
    css: [
      {
        properties: {},
      },
    ],
    recipes: "*",
  },

  // The output directory for your css system
  outdir: "styled-system",
});
