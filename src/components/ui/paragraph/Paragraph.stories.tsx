import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Paragraph } from "./Paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Typography/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Escala tipográfica do parágrafo",
    },
    tone: {
      control: "select",
      options: ["primary", "secondary", "muted"],
      description: "Token de cor aplicado ao texto",
    },
    maxWidth: {
      control: "select",
      options: ["none", "prose", "hero"],
      description: "Restrição de largura máxima para controle de leitura",
    },
    children: {
      control: "text",
      description: "Conteúdo textual do parágrafo",
    },
    className: {
      control: "text",
      description: "Classes utilitárias adicionais do Tailwind CSS",
    },
  },
  args: {
    children:
      "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
    size: "lg",
    tone: "secondary",
    maxWidth: "hero",
  },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {};

export const HeroDescription: Story = {
  args: {
    size: "lg",
    tone: "secondary",
    maxWidth: "hero",
    className: "mb-8",
  },
};

export const BodyRegular: Story = {
  args: {
    size: "md",
    tone: "secondary",
    maxWidth: "prose",
  },
};

export const PrimaryTone: Story = {
  args: {
    size: "md",
    tone: "primary",
    maxWidth: "prose",
  },
};

export const SmallMuted: Story = {
  args: {
    size: "sm",
    tone: "muted",
    maxWidth: "prose",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <span className="mb-1 block text-xs font-medium text-neutral-400">
          Large / Secondary / Hero Max-Width
        </span>
        <Paragraph size="lg" tone="secondary" maxWidth="hero">
          Practical courses taught by people who do the work every day. Learn
          design, technology, business and more — one focused lesson at a time.
        </Paragraph>
      </div>

      <div>
        <span className="mb-1 block text-xs font-medium text-neutral-400">
          Medium / Primary / Prose Max-Width
        </span>
        <Paragraph size="md" tone="primary" maxWidth="prose">
          Build real-world projects with guided feedback and structured modules
          designed to take you from fundamentals to production-ready code.
        </Paragraph>
      </div>

      <div>
        <span className="mb-1 block text-xs font-medium text-neutral-400">
          Small / Muted / Prose Max-Width
        </span>
        <Paragraph size="sm" tone="muted" maxWidth="prose">
          No credit card required. Cancel or switch learning tracks anytime.
        </Paragraph>
      </div>
    </div>
  ),
};
