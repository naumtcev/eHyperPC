import { AccordionUI } from "@/components/ui-kit/AccordionUI";
import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

const meta = {
  title: "UI-kit/AccordionUI",
  component: AccordionUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof AccordionUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Аккордеон",
    children: "текст",
  },
};
