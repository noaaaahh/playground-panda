import { ComponentPropsWithoutRef } from "react";

import { cx } from "~/styled-system/css";
import { ButtonVariantProps, button } from "~/styled-system/recipes";
import { PolymorphicProps, vapor } from "~/utils/factory";

interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "color">,
    PolymorphicProps,
    ButtonVariantProps {}

export const Button = (props: ButtonProps) => {
  const [variants, restProps] = button.splitVariantProps(props);

  return (
    <vapor.button
      className={cx(button(variants), restProps.className)}
      {...restProps}
    />
  );
};
