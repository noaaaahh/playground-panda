import { defineRecipe } from "@pandacss/dev";

const generateColors = (varaints: string) => {
  return {
    "--default-bg": `var(--${varaints})`,
    "--default-fg": `colors.text-light`,
    "--text": `var(--text-${varaints})`,
    "--text-alternative": `var(--text-${varaints}-alternative)`,
    "--transparent-8": `var(--${varaints}-transparent-8)`,
    "--transparent-16": `var(--${varaints}-transparent-16)`,
    "--transparent-24": `var(--${varaints}-transparent-24)`,
    "--transparent-32": `var(--${varaints}-transparent-32)`,
    "--hover": `var(--${varaints}-hover)`,
    "--active": `var(--${varaints}-active)`,
  };
};

export const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "300",

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
        "--default-fg": "colors.text-secondary-alternative",
      },
      success: generateColors("success"),
      warning: generateColors("warning"),
      danger: generateColors("danger"),
      hint: generateColors("hint"),
      contrast: generateColors("contrastt"),
    },
    shape: {
      fill: {
        backgroundColor: "var(--default-bg)",
        color: "var(--default-fg)",
        border: "none",

        _hover: { backgroundColor: "var(--hover)" },
        _focusVisible: { backgroundColor: "var(--hover)" },
        _active: { backgroundColor: "var(--active)" },
      },
      outline: {
        backgroundColor: "var(--transparent-8)",
        color: "var(--text-alternative)",
        border: "0.0625rem solid var(--default-bg)",

        _hover: { backgroundColor: "var(--transparent-16)" },
        _focus: { backgroundColor: "var(--transparent-16)" },
        _active: { backgroundColor: "var(--transparent-24)" },
      },
      invisible: {
        color: "var(--text)",
        backgroundColor: "transparent",
        border: "none",

        _hover: { backgroundColor: "gray-600-transparent-8" },
        _focus: { backgroundColor: "gray-600-transparent-8" },
        _active: {
          color: "var(--text-alternative)",
          backgroundColor: "gray-600-transparent-16",
        },
      },
    },
  },
});
