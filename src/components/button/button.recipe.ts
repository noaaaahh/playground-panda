import { defineRecipe } from "@pandacss/dev";

const generateColors = (varaints: string) => {
  const foreground =
    varaints === "secondary"
      ? `colors.text-secondary-alternative`
      : `colors.text-light`;

  return {
    "--colors-themes-text": `var(--text-${varaints})`,
    "--colors-themes-text-alternative": `var(--text-${varaints}-alternative)`,
    "--colors-themes-transparent-8": `var(--${varaints}-transparent-8)`,
    "--colors-themes-transparent-16": `var(--${varaints}-transparent-16)`,
    "--colors-themes-transparent-24": `var(--${varaints}-transparent-24)`,
    "--colors-themes-transparent-32": `var(--${varaints}-transparent-32)`,
    "--colors-themes-hover": `var(--${varaints}-hover)`,
    "--colors-themes-active": `var(--${varaints}-active)`,
    "--colors-themes-background": `var(--${varaints})`,
    "--colors-themes-foreground": foreground,
  };
};

export const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "300",
    border: "none",

    _disabled: {
      pointerEvents: "none",
      opacity: 0.32,
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    shape: "fill",
    stretch: false,
  },
  variants: {
    size: {
      sm: { gap: "050", h: "300", px: "050", textStyle: "subtitle1" },
      md: { gap: "075", h: "400", px: "150", textStyle: "subtitle1" },
      lg: { gap: "100", h: "500", px: "200", textStyle: "subtitle1" },
      xl: { gap: "100", h: "600", px: "300", textStyle: "subtitle1" },
    },
    stretch: { true: { width: "100%" } },
    color: {
      primary: generateColors("primary"),
      secondary: generateColors("secondary"),
      success: generateColors("success"),
      warning: generateColors("warning"),
      danger: generateColors("danger"),
      hint: generateColors("hint"),
      contrast: generateColors("contrastt"),
    },
    shape: {
      fill: {
        color: "themes.foreground",
        backgroundColor: "themes.background",

        _hover: { backgroundColor: "themes.hover" },
        _focusVisible: { backgroundColor: "themes.hover" },
        _active: { backgroundColor: "themes.active" },
      },
      outline: {
        color: "themes.text-alternative",
        backgroundColor: "themes.transparent-8",
        border: "0.0625rem solid",
        borderColor: "themes.background",

        _hover: { backgroundColor: "themes.transparent-16" },
        _focus: { backgroundColor: "themes.transparent-16" },
        _active: { backgroundColor: "themes.transparent-24" },
      },
      invisible: {
        color: "themes.text",
        backgroundColor: "transparent",

        _hover: { backgroundColor: "gray-600-transparent-8" },
        _focus: { backgroundColor: "gray-600-transparent-8" },
        _active: {
          color: "themes.text-alternative",
          backgroundColor: "gray-600-transparent-16",
        },
      },
    },
  },
});
