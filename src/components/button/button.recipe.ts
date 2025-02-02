import { defineRecipe } from "@pandacss/dev";
import { generateColors, type TColor } from "~/utils/generate-colors";

export const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "300",
    border: "none",
    cursor: "pointer",

    _disabled: {
      pointerEvents: "none",
      opacity: "disabled",
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
      xl: { gap: "100", h: "600", px: "300", textStyle: "heading6" },
    },
    stretch: { true: { width: "100%" }, false: {} },
    color: {
      primary: generateButtonColors("primary"),
      secondary: generateButtonColors("secondary"),
      success: generateButtonColors("success"),
      warning: generateButtonColors("warning"),
      danger: generateButtonColors("danger"),
      hint: generateButtonColors("hint"),
      contrast: generateButtonColors("contrast"),
    },
    shape: {
      fill: {
        color: "themes.foreground",
        backgroundColor: "themes.color",

        _hover: { backgroundColor: "themes.hover" },
        _focusVisible: { backgroundColor: "themes.hover" },
        _active: { backgroundColor: "themes.active" },
      },
      outline: {
        color: "themes.text-alternative",
        backgroundColor: "themes.transparent-8",
        border: "0.0625rem solid",
        borderColor: "themes.color",

        _hover: { backgroundColor: "themes.transparent-16" },
        _focusVisible: { backgroundColor: "themes.transparent-16" },
        _active: { backgroundColor: "themes.transparent-24" },
      },
      invisible: {
        color: "themes.text",
        backgroundColor: "transparent",

        _hover: { backgroundColor: "gray-600-transparent-8" },
        _focusVisible: { backgroundColor: "gray-600-transparent-8" },
        _active: {
          color: "themes.text-alternative",
          backgroundColor: "gray-600-transparent-16",
        },
      },
    },
  },
});

function generateButtonColors(color: TColor) {
  const foreground =
    color === "secondary"
      ? `colors.text-secondary-alternative`
      : `colors.text-light`;

  return {
    ...generateColors(color),
    "--colors-themes-foreground": foreground,
  };
}
