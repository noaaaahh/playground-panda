import { StoryObj } from "@storybook/react";
import { button } from "~/styled-system/recipes";
import { Button } from "./button";
import { getArgumentTypes } from "~/utils/getArgumentTypes";

export default { title: "Button", argTypes: getArgumentTypes(button) };

type Story = StoryObj<typeof Button>;

export const VisualRegression: Story = {
  render: () => (
    <div style={{ display: "flex" }}>
      <Button color="primary">primary</Button>
      <Button color="secondary">secondary</Button>
      <Button color="success">success</Button>
      <Button color="warning">warning</Button>
      <Button color="danger">danger</Button>
      <Button color="hint">hint</Button>
      <Button color="contrast">contrast</Button>
    </div>
  ),
};

export const Default: Story = {
  args: button.getVariantProps(),
  render: (args) => <Button {...args}>버튼</Button>,
};
