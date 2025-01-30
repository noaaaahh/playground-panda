import { ComponentPropsWithoutRef } from "react";

import { cx } from "../../../styled-system/css";
import { ButtonVariantProps, button } from "../../../styled-system/recipes";
import { PolymorphicProps, vapor } from "../../utils/factory";

interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "color">,
    PolymorphicProps,
    ButtonVariantProps {}

export const Button = ({
  color,
  shape,
  stretch,
  size,
  ...props
}: ButtonProps) => {
  return (
    <vapor.button
      className={cx(button({ color, shape, size, stretch }))}
      {...props}
    />
  );
};
