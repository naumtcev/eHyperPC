import type { Meta, StoryObj } from "@storybook/nextjs";

import { Table } from "./Table";

const meta = {
  title: "UI-kit/TableUI",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    body: "текст",
  },
};
