import { LinkUI } from "@/components/ui-kit/LinkUI";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "UI-kit/LinkUI",
  component: LinkUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LinkUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    children: "ссылка",
  },
};

export const Color: Story = {
  args: {
    href: "#",
    children: "ссылка",
    className: "text-[#9bdc85]",
  },
};
