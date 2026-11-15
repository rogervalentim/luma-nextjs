import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "Tag HTML semântica (SEO e Acessibilidade)",
      table: {
        defaultValue: { summary: "h1" },
      },
    },
    variant: {
      control: "select",
      options: ["display", "h1"],
      description: "Estilo visual da tipografia",
      table: {
        defaultValue: { summary: "display" },
      },
    },
    className: {
      control: "text",
      description: "Classes adicionais do Tailwind CSS",
    },
    children: {
      control: "text",
      description: "Conteúdo do título",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Display: Story = {
  args: {
    as: "h1",
    variant: "display",
    className: "mb-6",
    children: (
      <>
        Build skills that
        <br /> actually move you
        <br /> forward.
      </>
    ),
  },
};

export const Heading1: Story = {
  args: {
    as: "h1",
    variant: "h1",
    children: "Section Main Heading",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <span className="text-xs font-mono text-gray-400 block mb-2">
          variant=&quot;display&quot;
        </span>
        <Heading as="h1" variant="display">
          Build skills that
          <br /> actually move you
          <br /> forward.
        </Heading>
      </div>

      <div>
        <span className="text-xs font-mono text-gray-400 block mb-2">
          variant=&quot;h1&quot;
        </span>
        <Heading as="h1" variant="h1">
          Section Main Heading
        </Heading>
      </div>
    </div>
  ),
};
