import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["div", "section", "header", "main", "footer", "article"],
      description: "Tag HTML semântica renderizada no wrapper externo",
      table: {
        defaultValue: { summary: "div" },
      },
    },
    spacing: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      description: "Espaçamento vertical padronizado (py)",
      table: {
        defaultValue: { summary: "none" },
      },
    },
    noPadding: {
      control: "boolean",
      description: "Remove o espaçamento lateral (px-4 md:px-6)",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    className: {
      control: "text",
      description:
        "Classes aplicadas ao wrapper externo (full-width: bg, border, height)",
    },
    innerClassName: {
      control: "text",
      description: "Classes aplicadas ao miolo centralizado (max-w-280)",
    },
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    as: "div",
    spacing: "md",
    className: "bg-slate-100",
    children: (
      <div className="p-6 bg-white border border-dashed border-slate-300 rounded-lg text-center text-slate-600 text-sm">
        Conteúdo centralizado com <strong>max-w-280</strong> e padding lateral
        responsivo (<code>px-4 md:px-6</code>)
      </div>
    ),
  },
};

export const AsHeader: Story = {
  args: {
    as: "header",
    spacing: "none",
    className:
      "h-17.5 bg-background-light-yellow border-b border-b-line-1 items-center",
    innerClassName: "flex justify-between items-center",
    children: (
      <>
        <span className="font-bold text-slate-900">Luma</span>
        <nav className="hidden md:flex gap-6 text-sm text-slate-600">
          <span>Cursos</span>
          <span>Sobre</span>
          <span>Preços</span>
        </nav>
        <span className="text-sm font-medium text-slate-900">Log in</span>
      </>
    ),
  },
};

export const AsSection: Story = {
  args: {
    as: "section",
    spacing: "lg",
    className: "bg-slate-50 border-y border-slate-200",
    children: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="p-6 bg-white rounded-lg border border-slate-200 shadow-2xs text-slate-700"
          >
            Bloco {item} dentro da Section (spacing="lg")
          </div>
        ))}
      </div>
    ),
  },
};

export const FullBleedNoPadding: Story = {
  args: {
    as: "section",
    spacing: "sm",
    noPadding: true,
    className: "bg-slate-900 text-white",
    children: (
      <div className="bg-slate-800 p-4 text-center text-sm">
        <code>noPadding=true</code> — encosta nas bordas em telas menores que{" "}
        <code>max-w-280</code>
      </div>
    ),
  },
};
