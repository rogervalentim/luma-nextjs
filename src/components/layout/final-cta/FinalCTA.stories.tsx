import type { Meta, StoryObj } from "@storybook/react";
import { FinalCTA } from "./FinalCTA"; // Ajuste o caminho conforme sua estrutura de pastas

const meta = {
  title: "Sections/FinalCTA",
  component: FinalCTA,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Título principal da chamada para ação",
    },
    description: {
      control: "text",
      description: "Subtítulo ou texto de apoio",
    },
    backgroundImage: {
      control: "text",
      description: "Caminho ou URL da imagem de fundo da seção",
    },
    avatars: {
      control: "object",
      description: "Lista de avatares exibidos acima do título",
    },
    primaryAction: {
      control: "object",
      description: "Configuração do botão principal",
    },
    secondaryAction: {
      control: "object",
      description: "Configuração do botão secundário (outline)",
    },
  },
} satisfies Meta<typeof FinalCTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomContent: Story = {
  args: {
    title: "Ready to master frontend architecture?",
    description:
      "Join over 15,000 developers building scalable web applications.",
    primaryAction: {
      label: "Start free trial",
      href: "/trial",
    },
    secondaryAction: {
      label: "View curriculum",
      href: "/curriculum",
    },
  },
};

export const SingleAction: Story = {
  args: {
    title: "Your next breakthrough starts today.",
    description: "No credit card required. Cancel anytime.",
    primaryAction: {
      label: "Get started now",
      href: "/register",
    },
    secondaryAction: undefined,
  },
};

export const WithoutAvatarsAndBackground: Story = {
  args: {
    avatars: [],
    backgroundImage: "",
    className: "bg-neutral-50 border-t border-neutral-200",
  },
};

export const MobileViewport: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
