import type { Meta, StoryObj } from "@storybook/react";
import { Categories } from "./Categories";

const meta: Meta<typeof Categories> = {
  title: "Sections/Categories",
  component: Categories,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Categories>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
