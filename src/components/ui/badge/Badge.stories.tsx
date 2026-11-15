import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Conteúdo interno do badge",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "120+",
  },
};

export const ShortNumber: Story = {
  args: {
    children: "5",
  },
};
