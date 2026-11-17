import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";
import { Form } from "./Form";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-md p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {};

export const EmptySubmission: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole("button", { name: /send message/i }),
    );

    await expect(canvas.getByRole("status")).toHaveTextContent(
      "Please complete your name, email, and message.",
    );
  },
};

export const SuccessfulSubmission: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByLabelText(/full name/i), "Alex Morgan");
    await userEvent.type(
      canvas.getByLabelText(/email/i),
      "alex@example.com",
    );
    await userEvent.type(
      canvas.getByLabelText(/message/i),
      "Hi, I would like to learn more about the program.",
    );

    await userEvent.click(
      canvas.getByRole("button", { name: /send message/i }),
    );

    await expect(canvas.getByRole("status")).toHaveTextContent(
      "Thanks! Your message has been sent.",
    );
  },
};
