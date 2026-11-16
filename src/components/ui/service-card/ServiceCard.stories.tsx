import type { Meta, StoryObj } from "@storybook/react";
import { ServiceCard } from "./ServiceCard";

const meta: Meta<typeof ServiceCard> = {
  title: "Components/ServiceCard",
  component: ServiceCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    step: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    linkText: { control: "text" },
    href: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {
  args: {
    step: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    linkText: "Explore",
    href: "#",
  },
};

export const Hover: Story = {
  args: {
    ...Default.args,
    className:
      "!bg-background-light-yellow !ring-primary-blue !-translate-y-1 !shadow-[0_12px_24px_-8px_rgba(23,27,44,0.08)] [&>h3]:!text-primary-blue [&_svg]:!translate-x-1",
  },
};

export const InGrid: Story = {
  render: () => {
    const items = [
      {
        step: "01",
        title: "Product Design",
        description: "Turn complex problems into clear, useful experiences.",
        href: "#",
      },
      {
        step: "02",
        title: "Engineering",
        description: "Build scalable and resilient digital architectures.",
        href: "#",
      },
      {
        step: "03",
        title: "Strategy",
        description: "Align business goals with real user needs.",
        href: "#",
      },
      {
        step: "04",
        title: "Growth",
        description: "Optimize conversion and continuous product evolution.",
        href: "#",
      },
    ];

    return (
      <div className="grid grid-cols-1 gap-4 lg:gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <ServiceCard key={item.step} {...item} />
        ))}
      </div>
    );
  },
};
