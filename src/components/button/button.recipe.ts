import { defineRecipe } from "@pandacss/dev";

const generateColors = (varaints: string) => {
  return {
    "--colors-theme-text": `var(--text-${varaints})`,
    "--colors-theme-text-alternative": `var(--text-${varaints}-alternative)`,
    "--colors-theme-transparent-8": `var(--${varaints}-transparent-8)`,
    "--colors-theme-transparent-16": `var(--${varaints}-transparent-16)`,
    "--colors-theme-transparent-24": `var(--${varaints}-transparent-24)`,
    "--colors-theme-transparent-32": `var(--${varaints}-transparent-32)`,
    "--colors-theme-hover": `var(--${varaints}-hover)`,
    "--colors-theme-active": `var(--${varaints}-active)`,

    "--colors-theme-background": `var(--${varaints})`,
    "--colors-theme-foreground": `colors.text-light`,
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
      secondary: {
        ...generateColors("secondary"),
        "--colors-theme-foreground": "colors.text-secondary-alternative",
      },
      success: generateColors("success"),
      warning: generateColors("warning"),
      danger: generateColors("danger"),
      hint: generateColors("hint"),
      contrast: generateColors("contrastt"),
    },
    shape: {
      fill: {
        color: "theme-foreground",
        backgroundColor: "theme-background",

        _hover: { backgroundColor: "theme-hover" },
        _focusVisible: { backgroundColor: "theme-hover" },
        _active: { backgroundColor: "theme-active" },
      },
      outline: {
        color: "theme-text-alternative",
        backgroundColor: "theme-transparent-8",
        border: "0.0625rem solid",
        borderColor: "theme-background",

        _hover: { backgroundColor: "theme-transparent-16" },
        _focus: { backgroundColor: "theme-transparent-16" },
        _active: { backgroundColor: "theme-transparent-24" },
      },
      invisible: {
        color: "theme-text",
        backgroundColor: "transparent",

        _hover: { backgroundColor: "gray-600-transparent-8" },
        _focus: { backgroundColor: "gray-600-transparent-8" },
        _active: {
          color: "theme-text-alternative",
          backgroundColor: "gray-600-transparent-16",
        },
      },
    },
  },
});
