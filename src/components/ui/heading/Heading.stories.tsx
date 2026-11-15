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
      options: ["display", "h1", "h2", "h3", "h4"],
      description: "Estilo visual da tipografia",
      table: {
        defaultValue: { summary: "display" },
      },
    },
    color: {
      control: "select",
      options: ["primary", "primaryBlue", "white"],
      description: "Variação de cor do texto",
      table: {
        defaultValue: { summary: "primary" },
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
    color: "primary",
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
    color: "primary",
    children: "Section Main Heading",
  },
};

export const Heading2: Story = {
  args: {
    as: "h2",
    variant: "h2",
    color: "primary",
    children: "Section Secondary Heading",
  },
};

export const Heading3: Story = {
  args: {
    as: "h3",
    variant: "h3",
    color: "primary",
    children: "Card or Subsection Heading",
  },
};

export const Heading4: Story = {
  args: {
    as: "h4",
    variant: "h4",
    color: "primary",
    children: "Small Subsection or Item Heading",
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

      <div>
        <span className="text-xs font-mono text-gray-400 block mb-2">
          variant=&quot;h2&quot;
        </span>
        <Heading as="h2" variant="h2">
          Section Secondary Heading
        </Heading>
      </div>

      <div>
        <span className="text-xs font-mono text-gray-400 block mb-2">
          variant=&quot;h3&quot;
        </span>
        <Heading as="h3" variant="h3">
          Card or Subsection Heading
        </Heading>
      </div>

      <div>
        <span className="text-xs font-mono text-gray-400 block mb-2">
          variant=&quot;h4&quot;
        </span>
        <Heading as="h4" variant="h4">
          Small Subsection or Item Heading
        </Heading>
      </div>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <span className="text-xs font-mono text-gray-400 block mb-1">
          color=&quot;primary&quot;
        </span>
        <Heading as="h2" variant="h1" color="primary">
          Primary Heading Color
        </Heading>
      </div>

      <div>
        <span className="text-xs font-mono text-gray-400 block mb-1">
          color=&quot;primaryBlue&quot;
        </span>
        <Heading as="h2" variant="h1" color="primaryBlue">
          Primary Blue Heading Color
        </Heading>
      </div>

      <div className="bg-slate-900 p-6 rounded-lg">
        <span className="text-xs font-mono text-gray-400 block mb-1">
          color=&quot;white&quot;
        </span>
        <Heading as="h2" variant="h1" color="white">
          White Heading Color
        </Heading>
      </div>
    </div>
  ),
};
