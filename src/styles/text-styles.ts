import { defineTextStyles, defineTokens } from "@pandacss/dev";

export const fontSizes = defineTokens.fontSizes({
  "025": { value: "var(--font-size-025)" },
  "050": { value: "var(--font-size-050)" },
  "075": { value: "var(--font-size-075)" },
  100: { value: "var(--font-size-100)" },
  200: { value: "var(--font-size-200)" },
  300: { value: "var(--font-size-300)" },
  400: { value: "var(--font-size-400)" },
  500: { value: "var(--font-size-500)" },
  600: { value: "var(--font-size-600)" },
  700: { value: "var(--font-size-700)" },
  800: { value: "var(--font-size-800)" },
  900: { value: "var(--font-size-900)" },
});

export const fontWeights = defineTokens.fontWeights({
  400: { value: "var(--font-weight-400)" },
  500: { value: "var(--font-weight-500)" },
  700: { value: "var(--font-weight-700)" },
  800: { value: "var(--font-weight-800)" },
});

export const lineHeights = defineTokens.lineHeights({
  "025": { value: "var(--line-height-025)" },
  "050": { value: "var(--line-height-050)" },
  "075": { value: "var(--line-height-075)" },
  100: { value: "var(--line-height-100)" },
  200: { value: "var(--line-height-200)" },
  300: { value: "var(--line-height-300)" },
  400: { value: "var(--line-height-400)" },
  500: { value: "var(--line-height-500)" },
  600: { value: "var(--line-height-600)" },
  700: { value: "var(--line-height-700)" },
  800: { value: "var(--line-height-800)" },
  900: { value: "var(--line-height-900)" },
  1000: { value: "var(--line-height-1000)" },
});

export const letterSpacings = defineTokens.letterSpacings({
  d1: { value: "var(--letter-spacing-d1, -0.4)" },
  d2: { value: "var(--letter-spacing-d2, -0.4)" },
  d3: { value: "var(--letter-spacing-d3, -0.4)" },
  d4: { value: "var(--letter-spacing-d4, -0.4)" },
  h1: { value: "var(--letter-spacing-h1, -0.4)" },
  h2: { value: "var(--letter-spacing-h2, -0.4)" },
  h3: { value: "var(--letter-spacing-h3, -0.3)" },
  h4: { value: "var(--letter-spacing-h4, -0.2)" },
  h5: { value: "var(--letter-spacing-h5, -0.1)" },
  h6: { value: "var(--letter-spacing-h6, -0.1)" },
  s1: { value: "var(--letter-spacing-s1, -0.1)" },
  s2: { value: "var(--letter-spacing-s2, 0)" },
  b1: { value: "var(--letter-spacing-b1, -0.1)" },
  b2: { value: "var(--letter-spacing-b2, -0.1)" },
  b3: { value: "var(--letter-spacing-b3, -0.1)" },
  b4: { value: "var(--letter-spacing-b4, 0)" },
  c1: { value: "var(--letter-spacing-c1, 0)" },
  c2: { value: "var(--letter-spacing-c2, 0)" },
});

export const textStyles = defineTextStyles({
  heading1: {
    value: {
      fontSize: `var(--font-size-600)`,
      fontWeight: `var(--font-weight-700)`,
      lineHeight: `var(--line-height-600)`,
      letterSpacing: `var(--letter-spacing-h1)`,
    },
  },
  heading2: {
    value: {
      fontSize: `var(--font-size-500)`,
      fontWeight: `var(--font-weight-700)`,
      lineHeight: `var(--line-height-500)`,
      letterSpacing: `var(--letter-spacing-h2)`,
    },
  },
  heading3: {
    value: {
      fontSize: `var(--font-size-400)`,
      fontWeight: `var(--font-weight-700)`,
      lineHeight: `var(--line-height-400)`,
      letterSpacing: `var(--letter-spacing-h3)`,
    },
  },
  heading4: {
    value: {
      fontSize: `var(--font-size-300)`,
      fontWeight: `var(--font-weight-700)`,
      lineHeight: `var(--line-height-300)`,
      letterSpacing: `var(--letter-spacing-h4)`,
    },
  },
  heading5: {
    value: {
      fontSize: `var(--font-size-200)`,
      fontWeight: `var(--font-weight-700)`,
      lineHeight: `var(--line-height-200)`,
      letterSpacing: `var(--letter-spacing-h5)`,
    },
  },
  heading6: {
    value: {
      fontSize: `var(--font-size-100)`,
      fontWeight: `var(--font-weight-500)`,
      lineHeight: `var(--line-height-100)`,
      letterSpacing: `var(--letter-spacing-h6)`,
    },
  },

  /** subtitle */
  subtitle1: {
    value: {
      fontSize: `var(--font-size-075)`,
      fontWeight: `var(--font-weight-500)`,
      lineHeight: `var(--line-height-075)`,
      letterSpacing: `var(--letter-spacing-s1)`,
    },
  },
  subtitle2: {
    value: {
      fontSize: `var(--font-size-050)`,
      fontWeight: `var(--font-weight-500)`,
      lineHeight: `var(--line-height-050)`,
      letterSpacing: `var(--letter-spacing-s2)`,
    },
  },

  /** body */
  body1: {
    value: {
      fontSize: `var(--font-size-100)`,
      fontWeight: `var(--font-weight-400)`,
      lineHeight: `var(--line-height-100)`,
      letterSpacing: `var(--letter-spacing-b1)`,
    },
  },
  body2: {
    value: {
      fontSize: `var(--font-size-075)`,
      fontWeight: `var(--font-weight-400)`,
      lineHeight: `var(--line-height-075)`,
      letterSpacing: `var(--letter-spacing-b2)`,
    },
  },
  body3: {
    value: {
      fontSize: `var(--font-size-050)`,
      fontWeight: `var(--font-weight-400)`,
      lineHeight: `var(--line-height-050)`,
      letterSpacing: `var(--letter-spacing-b3)`,
    },
  },
  body4: {
    value: {
      fontSize: `var(--font-size-025)`,
      fontWeight: `var(--font-weight-400)`,
      lineHeight: `var(--line-height-025)`,
      letterSpacing: `var(--letter-spacing-b4)`,
    },
  },
});
