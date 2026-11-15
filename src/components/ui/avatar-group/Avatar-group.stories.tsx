import type { Meta, StoryObj } from "@storybook/react";
import { AvatarGroup, AvatarItem } from "./AvatarGroup";

const mockAvatars: AvatarItem[] = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    alt: "Ana Silva",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    alt: "Carlos Mendes",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    alt: "Beatriz Costa",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    alt: "João Pereira",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    alt: "Mariana Souza",
  },
];

const meta: Meta<typeof AvatarGroup> = {
  title: "Components/AvatarGroup",
  component: AvatarGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light-yellow",
      values: [
        { name: "light-yellow", value: "#FEFCE8" },
        { name: "white", value: "#FFFFFF" },
      ],
    },
  },
  argTypes: {
    size: {
      control: { type: "number", min: 20, max: 80, step: 4 },
    },
    max: {
      control: { type: "number", min: 1, max: 10 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
  args: {
    avatars: mockAvatars.slice(0, 3),
    size: 32,
    ringClassName: "ring-2 ring-yellow-50",
  },
};

export const WithMaxLimit: Story = {
  args: {
    avatars: mockAvatars,
    max: 4,
    size: 32,
    ringClassName: "ring-2 ring-yellow-50",
  },
};

export const Large: Story = {
  args: {
    avatars: mockAvatars.slice(0, 4),
    size: 48,
    ringClassName: "ring-2 ring-yellow-50",
  },
};
