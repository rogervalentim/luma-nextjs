import type { Meta, StoryObj } from "@storybook/react";
import { FeaturedCourse } from "./FeaturedCourse";

const meta: Meta<typeof FeaturedCourse> = {
  title: "Sections/FeaturedCourse",
  component: FeaturedCourse,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturedCourse>;

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
