import type { Meta, StoryObj } from "@storybook/react";
import { CommunityCollage } from "./CommunityCollage";

const meta: Meta<typeof CommunityCollage> = {
  title: "Components/CommunityCollage",
  component: CommunityCollage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CommunityCollage>;

export const Default: Story = {};

export const MobileViewport: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const InSectionContext: Story = {
  render: () => (
    <section className="flex flex-col items-center gap-8 bg-slate-50 p-8 md:flex-row">
      <div className="max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Nossa Comunidade Global
        </h2>
        <p className="text-slate-600">
          Conecte-se com estudantes e professores de todo o mundo em um ambiente
          colaborativo.
        </p>
      </div>
      <CommunityCollage />
    </section>
  ),
};
