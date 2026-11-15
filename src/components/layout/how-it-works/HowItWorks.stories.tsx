import type { Meta, StoryObj } from "@storybook/react";
import { HowItWorks } from "./HowItWorks";

const meta: Meta<typeof HowItWorks> = {
  title: "Sections/HowItWorks",
  component: HowItWorks,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HowItWorks>;

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
