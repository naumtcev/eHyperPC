import { AlertUI } from "@/components/ui-kit/AlertUI";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "UI-kit/AlertUI",
  component: AlertUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AlertUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Алерт",
    children: "текст",
    className: "bg-[#9bdc85] text-[black]",
  },
};
