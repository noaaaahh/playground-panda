import { defineConfig } from "@pandacss/dev";
import * as tokens from "./src/styles";

import * as recipes from "./src/components/recipes";

const dimensions = [
  "dimension-025",
  "dimension-050",
  "dimension-075",
  "dimension-100",
  "dimension-150",
  "dimension-175",
  "dimension-200",
  "dimension-225",
  "dimension-250",
  "dimension-300",
  "dimension-400",
  "dimension-500",
  "dimension-600",
  "dimension-700",
  "dimension-800",
];

const radius = [
  "border-radius-000",
  "border-radius-050",
  "border-radius-100",
  "border-radius-200",
  "border-radius-300",
  "border-radius-400",
  "border-radius-500",
  "border-radius-600",
  "border-radius-700",
  "border-radius-800",
  "border-radius-900",
];

const createTransform = (values, property, shorthand, prefix) => ({
  values,
  shorthand,
  transform(value, { token }) {
    if (values.includes(value)) {
      const [, xx] = value.split(`${prefix}-`);
      return { [property]: token(`${prefix}.${xx}`) };
    }
    return { [property]: value };
  },
});

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
      tokens: {
        ...tokens,

        dimension: {
          "025": { value: "var(--dimension-025)" },
          "050": { value: "var(--dimension-050)" },
          "075": { value: "var(--dimension-075)" },
          100: { value: "var(--dimension-100)" },
          150: { value: "var(--dimension-150)" },
          175: { value: "var(--dimension-175)" },
          200: { value: "var(--dimension-200)" },
          225: { value: "var(--dimension-225)" },
          250: { value: "var(--dimension-250)" },
          300: { value: "var(--dimension-300)" },
          400: { value: "var(--dimension-400)" },
          500: { value: "var(--dimension-500)" },
          600: { value: "var(--dimension-600)" },
          700: { value: "var(--dimension-700)" },
          800: { value: "var(--dimension-800)" },
        },
        "border-radius": {
          "000": { value: "var(--border-radius-000)" },
          "050": { value: "var(--border-radius-050)" },
          100: { value: "var(--border-radius-100)" },
          200: { value: "var(--border-radius-200)" },
          300: { value: "var(--border-radius-300)" },
          400: { value: "var(--border-radius-400)" },
          500: { value: "var(--border-radius-500)" },
          600: { value: "var(--border-radius-600)" },
          700: { value: "var(--border-radius-700)" },
          800: { value: "var(--border-radius-800)" },
          900: { value: "var(--border-radius-900)" },
        },
      },
      textStyles: tokens.textStyles,
    },
    recipes,
  },

  outExtension: "js",

  staticCss: {
    recipes: "*",
  },

  utilities: {
    ...generateUtilities(),
    ...generateRadius(),
  },

  jsxFramework: "react",
  jsxStyleProps: "none",

  // styled-system/jsx의 styled가 사라지는 문제로 인해 사용 X
  // jsxFactory: 'vapor',

  // The output directory for your css system
  outdir: "src/styled-system",
});

function generateUtilities() {
  return {
    width: createTransform(dimensions, "width", "w", "dimension"),
    maxWidth: createTransform(dimensions, "maxWidth", "maxW", "dimension"),
    minWidth: createTransform(dimensions, "minWidth", "minW", "dimension"),
    height: createTransform(dimensions, "height", "h", "dimension"),
    maxHeight: createTransform(dimensions, "maxHeight", "maxH", "dimension"),
    minHeight: createTransform(dimensions, "minHeight", "minH", "dimension"),
  };
}

function generateRadius() {
  return {
    borderRadius: createTransform(
      radius,
      "borderRadius",
      "radii",
      "border-radius"
    ),
  };
}
