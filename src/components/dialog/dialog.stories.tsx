import { StoryObj } from "@storybook/react";
import { dialog } from "~/styled-system/recipes";
import { getArgumentTypes } from "~/utils/getArgumentTypes";
import { Dialog } from "./dialog";

export default { title: "Dialog", argTypes: getArgumentTypes(dialog) };

type Story = StoryObj<typeof Dialog.Root>;

export const Default: Story = {
  args: dialog.getVariantProps(),
  render: (args) => (
    <Dialog.Root {...args}>
      <Dialog.Trigger>open</Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Booking info</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <Dialog.Description>
            Please enter the info for your booking below.
          </Dialog.Description>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Close>close</Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  ),
};
