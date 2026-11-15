import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Hero } from "./Hero";

const meta: Meta<typeof Hero> = {
  title: "Sections/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
