import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const Mobile: Story = {
  tags: ["!autodocs"],
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const MobileMenuInteraction: Story = {
  ...Mobile,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole("button", {
      name: /open navigation menu/i,
    });

    await userEvent.click(toggle);

    await expect(
      canvas.getByRole("region", { name: /mobile navigation/i }),
    ).toBeVisible();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");

    await userEvent.keyboard("{Escape}");

    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  },
};
