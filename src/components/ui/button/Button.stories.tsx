import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button, type ButtonProps } from "./Button";

const meta = {
  title: "Components/UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
  },
  argTypes: {
    children: { control: "text" },
    href: { control: "text" },
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    className: { control: "text" },
    onClick: { action: "clicked" },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const AsLink: Story = {
  args: {
    href: "/dashboard",
    children: "Link Button",
    variant: "primary",
  },
};

export const AllVariants: Story = {
  render: ({ size, disabled, className }) => (
    <div className="flex flex-wrap items-center gap-4">
      <Button
        size={size}
        disabled={disabled}
        className={className}
        variant="primary"
      >
        Primary
      </Button>
      <Button
        size={size}
        disabled={disabled}
        className={className}
        variant="secondary"
      >
        Secondary
      </Button>
      <Button
        size={size}
        disabled={disabled}
        className={className}
        variant="outline"
      >
        Outline
      </Button>
      <div className="rounded-lg bg-slate-900 p-2">
        <Button
          size={size}
          disabled={disabled}
          className={className}
          variant="ghost"
        >
          Ghost
        </Button>
      </div>
    </div>
  ),
};
