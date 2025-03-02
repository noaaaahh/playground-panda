import { StoryObj } from "@storybook/react";
import { Component } from "./component";

export default { title: "Component" };

type Story = StoryObj<typeof Component>;

export const VisualRegression: Story = {
  render: () => (
    <div style={{ display: "flex" }}>
      <Component />
    </div>
  ),
};
