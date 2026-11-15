import type { Meta, StoryObj } from "@storybook/react";
import { CommunityShowcase } from "./CommunityShowcase";

const meta = {
  title: "Sections/CommunityShowcase",
  component: CommunityShowcase,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    eyebrow: {
      control: "text",
      description: "Texto menor exibido acima do título principal",
    },
    title: {
      control: "text",
      description: "Título principal da seção",
    },
    description: {
      control: "text",
      description: "Parágrafo descritivo",
    },
    ctaLabel: {
      control: "text",
      description: "Texto do botão de ação",
    },
    ctaHref: {
      control: "text",
      description: "Link de destino do botão",
    },
    imageSrc: {
      control: "text",
      description: "Caminho ou URL da imagem lateral",
    },
    imageAlt: {
      control: "text",
      description: "Texto alternativo para acessibilidade da imagem",
    },
  },
} satisfies Meta<typeof CommunityShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    eyebrow: "the people",
    title: "Meet international students & teachers",
    description:
      "Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.",
    ctaLabel: "Explore teachers and students",
    ctaHref: "/community",
    imageSrc: "/community-showcase-image.png",
    imageAlt: "Group of international students and teachers smiling together",
  },
};

export const CustomContent: Story = {
  args: {
    eyebrow: "nossa comunidade",
    title: "Conecte-se com mentores e alunos do mundo todo",
    description:
      "Participe de grupos de estudo, eventos ao vivo e trocas culturais com pessoas de mais de 50 países.",
    ctaLabel: "Conhecer a comunidade",
    ctaHref: "/comunidade",
    imageSrc: "/community-showcase-image.png",
    imageAlt: "Estudantes e professores internacionais sorrindo juntos",
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    ...Default.args,
  },
};
