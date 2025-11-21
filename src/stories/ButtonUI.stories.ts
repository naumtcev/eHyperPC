import { ButtonUI } from "@/components/ui-kit/ButtonUI";
import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

const meta = {
  title: "UI-kit/ButtonUI",
  component: ButtonUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "default",
    children: "Кнопка",
  },
};

export const Color: Story = {
  args: {
    size: "default",
    className: "bg-[#9bdc85] text-[black]",
    children: "Кнопка",
  },
};
