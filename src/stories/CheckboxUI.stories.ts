import { CheckboxUI } from "@/components/ui-kit/Checkbox";
import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

const meta = {
  title: "UI-kit/CheckboxUI",
  component: CheckboxUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof CheckboxUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Текст",
    id: "test",
  },
};
