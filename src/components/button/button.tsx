import { styled } from "~/styled-system/jsx";
import { button } from "~/styled-system/recipes";
import { ComponentProps } from "~/styled-system/types";
import { vapor } from "~/utils/factory";

export interface ButtonProps extends ComponentProps<"button"> {}
export const Button = styled(vapor.button, button);

// interface ButtonProps
//   extends Omit<ComponentProps<"button">, "color">,
//     PolymorphicProps,
//     ButtonVariantProps {}

// export const Button = (props: ButtonProps) => {
//   const [variants, restProps] = button.splitVariantProps(props);

//   return (
//     <vapor.button
//       className={cx(button(variants), restProps.className)}
//       {...restProps}
//     />
//   );
// };
