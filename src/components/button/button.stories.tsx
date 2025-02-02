import { StoryObj } from "@storybook/react";
import { button } from "~/styled-system/recipes";
import { Button } from "./button";
import { getArgumentTypes } from "~/utils/getArgumentTypes";

export default { title: "Button", argTypes: getArgumentTypes(button) };

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: button.getVariantProps(),
  render: (args) => <Button {...args}>버튼</Button>,
};
