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
      options: ["xs", "sm", "default", "md", "lg"],
      description: "Escala tipográfica do parágrafo",
    },
    tone: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "white", "primaryBlue"],
      description: "Token de cor aplicado ao texto e borda",
    },
    variant: {
      control: "select",
      options: ["default", "outlined"],
      description:
        "Estilo visual do parágrafo (padrão ou com borda estilo badge)",
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
    tone: "primary",
    variant: "default",
    maxWidth: "none",
  },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {};

export const HeroDescription: Story = {
  args: {
    size: "lg",
    tone: "primary",
    maxWidth: "hero",
    className: "mb-8",
  },
};

export const BodyBase: Story = {
  args: {
    size: "default",
    tone: "primary",
    maxWidth: "prose",
  },
};

export const BodyRegular: Story = {
  args: {
    size: "md",
    tone: "primary",
    maxWidth: "prose",
  },
};

export const SecondaryTone: Story = {
  args: {
    size: "md",
    tone: "secondary",
    maxWidth: "prose",
  },
};

export const TertiaryTone: Story = {
  args: {
    size: "md",
    tone: "tertiary",
    maxWidth: "prose",
  },
};

export const PrimaryBlueTone: Story = {
  args: {
    size: "md",
    tone: "primaryBlue",
    maxWidth: "prose",
  },
};

export const SmallCaption: Story = {
  args: {
    size: "xs",
    tone: "primary",
    maxWidth: "prose",
    children: "FEATURED LEARNING TRACK",
  },
};

export const WhiteTone: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  render: (args) => (
    <div className="rounded-lg bg-neutral-900 p-6">
      <Paragraph {...args} />
    </div>
  ),
  args: {
    size: "lg",
    tone: "white",
    maxWidth: "hero",
  },
};

export const OutlinedBadges: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-3 rounded-lg bg-blue-600 p-6">
        <Paragraph size="sm" tone="white" variant="outlined">
          8 lessons
        </Paragraph>
        <Paragraph size="sm" tone="white" variant="outlined">
          2h 40min
        </Paragraph>
        <Paragraph size="sm" tone="white" variant="outlined">
          Intermediate
        </Paragraph>
      </div>

      <div className="flex flex-wrap gap-3 p-2">
        <Paragraph size="sm" tone="primary" variant="outlined">
          8 lessons
        </Paragraph>
        <Paragraph size="sm" tone="primary" variant="outlined">
          2h 40min
        </Paragraph>
        <Paragraph size="sm" tone="primary" variant="outlined">
          Intermediate
        </Paragraph>
      </div>

      <div className="flex flex-wrap gap-3 p-2">
        <Paragraph size="sm" tone="secondary" variant="outlined">
          8 lessons
        </Paragraph>
        <Paragraph size="sm" tone="secondary" variant="outlined">
          2h 40min
        </Paragraph>
        <Paragraph size="sm" tone="secondary" variant="outlined">
          Intermediate
        </Paragraph>
      </div>

      <div className="flex flex-wrap gap-3 p-2">
        <Paragraph size="sm" tone="tertiary" variant="outlined">
          8 lessons
        </Paragraph>
        <Paragraph size="sm" tone="tertiary" variant="outlined">
          2h 40min
        </Paragraph>
        <Paragraph size="sm" tone="tertiary" variant="outlined">
          Intermediate
        </Paragraph>
      </div>

      <div className="flex flex-wrap gap-3 p-2">
        <Paragraph size="sm" tone="primaryBlue" variant="outlined">
          8 lessons
        </Paragraph>
        <Paragraph size="sm" tone="primaryBlue" variant="outlined">
          2h 40min
        </Paragraph>
        <Paragraph size="sm" tone="primaryBlue" variant="outlined">
          Intermediate
        </Paragraph>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <span className="mb-1 block text-xs font-medium text-neutral-400">
          Large / Primary / Hero Max-Width
        </span>
        <Paragraph size="lg" tone="primary" maxWidth="hero">
          Practical courses taught by people who do the work every day. Learn
          design, technology, business and more — one focused lesson at a time.
        </Paragraph>
      </div>

      <div>
        <span className="mb-1 block text-xs font-medium text-neutral-400">
          Default (Base) / Primary / Prose Max-Width
        </span>
        <Paragraph size="default" tone="primary" maxWidth="prose">
          Build real-world projects with guided feedback and structured modules
          designed to take you from fundamentals to production-ready code.
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
          Medium / Secondary / Prose Max-Width
        </span>
        <Paragraph size="md" tone="secondary" maxWidth="prose">
          Build real-world projects with guided feedback and structured modules
          designed to take you from fundamentals to production-ready code.
        </Paragraph>
      </div>

      <div>
        <span className="mb-1 block text-xs font-medium text-neutral-400">
          Medium / Tertiary / Prose Max-Width
        </span>
        <Paragraph size="md" tone="tertiary" maxWidth="prose">
          Build real-world projects with guided feedback and structured modules
          designed to take you from fundamentals to production-ready code.
        </Paragraph>
      </div>

      <div>
        <span className="mb-1 block text-xs font-medium text-neutral-400">
          Medium / Primary Blue / Prose Max-Width
        </span>
        <Paragraph size="md" tone="primaryBlue" maxWidth="prose">
          Build real-world projects with guided feedback and structured modules
          designed to take you from fundamentals to production-ready code.
        </Paragraph>
      </div>

      <div>
        <span className="mb-1 block text-xs font-medium text-neutral-400">
          Small / Secondary / Prose Max-Width
        </span>
        <Paragraph size="sm" tone="secondary" maxWidth="prose">
          No credit card required. Cancel or switch learning tracks anytime.
        </Paragraph>
      </div>

      <div>
        <span className="mb-1 block text-xs font-medium text-neutral-400">
          Small / Tertiary / Prose Max-Width
        </span>
        <Paragraph size="sm" tone="tertiary" maxWidth="prose">
          No credit card required. Cancel or switch learning tracks anytime.
        </Paragraph>
      </div>

      <div>
        <span className="mb-1 block text-xs font-medium text-neutral-400">
          Extra Small / Primary / Tracking
        </span>
        <Paragraph size="xs" tone="primary" maxWidth="prose">
          FEATURED LEARNING TRACK
        </Paragraph>
      </div>

      <div>
        <span className="mb-1 block text-xs font-medium text-neutral-400">
          Small / Primary / Outlined Variant
        </span>
        <div className="flex flex-wrap gap-3">
          <Paragraph size="sm" tone="primary" variant="outlined">
            8 lessons
          </Paragraph>
          <Paragraph size="sm" tone="primary" variant="outlined">
            2h 40min
          </Paragraph>
          <Paragraph size="sm" tone="primary" variant="outlined">
            Intermediate
          </Paragraph>
        </div>
      </div>

      <div>
        <span className="mb-1 block text-xs font-medium text-neutral-400">
          Small / Secondary / Outlined Variant
        </span>
        <div className="flex flex-wrap gap-3">
          <Paragraph size="sm" tone="secondary" variant="outlined">
            8 lessons
          </Paragraph>
          <Paragraph size="sm" tone="secondary" variant="outlined">
            2h 40min
          </Paragraph>
          <Paragraph size="sm" tone="secondary" variant="outlined">
            Intermediate
          </Paragraph>
        </div>
      </div>

      <div>
        <span className="mb-1 block text-xs font-medium text-neutral-400">
          Small / Tertiary / Outlined Variant
        </span>
        <div className="flex flex-wrap gap-3">
          <Paragraph size="sm" tone="tertiary" variant="outlined">
            8 lessons
          </Paragraph>
          <Paragraph size="sm" tone="tertiary" variant="outlined">
            2h 40min
          </Paragraph>
          <Paragraph size="sm" tone="tertiary" variant="outlined">
            Intermediate
          </Paragraph>
        </div>
      </div>

      <div>
        <span className="mb-1 block text-xs font-medium text-neutral-400">
          Small / Primary Blue / Outlined Variant
        </span>
        <div className="flex flex-wrap gap-3">
          <Paragraph size="sm" tone="primaryBlue" variant="outlined">
            8 lessons
          </Paragraph>
          <Paragraph size="sm" tone="primaryBlue" variant="outlined">
            2h 40min
          </Paragraph>
          <Paragraph size="sm" tone="primaryBlue" variant="outlined">
            Intermediate
          </Paragraph>
        </div>
      </div>

      <div className="rounded-lg bg-neutral-900 p-4">
        <span className="mb-1 block text-xs font-medium text-neutral-400">
          Large / White / Hero Max-Width
        </span>
        <Paragraph size="lg" tone="white" maxWidth="hero">
          Practical courses taught by people who do the work every day. Learn
          design, technology, business and more — one focused lesson at a time.
        </Paragraph>
      </div>

      <div className="rounded-lg bg-blue-600 p-4">
        <span className="mb-2 block text-xs font-medium text-blue-100">
          Small / White / Outlined Variant
        </span>
        <div className="flex flex-wrap gap-3">
          <Paragraph size="sm" tone="white" variant="outlined">
            8 lessons
          </Paragraph>
          <Paragraph size="sm" tone="white" variant="outlined">
            2h 40min
          </Paragraph>
          <Paragraph size="sm" tone="white" variant="outlined">
            Intermediate
          </Paragraph>
        </div>
      </div>
    </div>
  ),
};
