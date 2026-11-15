import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Eyebrow } from "./Eyebrow";

const meta: Meta<typeof Eyebrow> = {
  title: "UI/Eyebrow",
  component: Eyebrow,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["blue", "white"],
      description: "Define a variação de cor do texto",
    },
    children: {
      control: "text",
      description: "Conteúdo textual exibido no Eyebrow",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Eyebrow>;

export const Blue: Story = {
  args: {
    children: "Learn at your own pace",
    variant: "blue",
  },
};

export const White: Story = {
  args: {
    children: "Learn at your own pace",
    variant: "white",
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-primary-blue p-6">
        <Story />
      </div>
    ),
  ],
};
