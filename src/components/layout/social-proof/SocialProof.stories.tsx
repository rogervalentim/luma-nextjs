import type { Meta, StoryObj } from "@storybook/react";
import { SocialProof } from "./SocialProof";

const meta: Meta<typeof SocialProof> = {
  title: "Sections/SocialProof",
  component: SocialProof,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Seção de prova social que exibe um depoimento em destaque com autor e cargo ao lado das principais métricas da plataforma.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SocialProof>;

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
