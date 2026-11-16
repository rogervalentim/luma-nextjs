"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

export function Form() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<{
    type: "idle" | "submitting" | "success";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus({
        type: "idle",
        message: "Please complete your name, email, and message.",
      });
      return;
    }

    setStatus({ type: "submitting", message: "Sending your message..." });

    await new Promise((resolve) => setTimeout(resolve, 600));

    setFormData(initialFormData);
    setStatus({
      type: "success",
      message: "Thanks! Your message has been sent.",
    });
  };

  return (
    <div className="w-full lg:max-w-120 px-5 py-6 lg:p-10 bg-background-white border border-line-1 rounded-2xl">
      <div className="mb-6">
        <Heading variant="h4" as="h4" className="mb-2">
          Contact us
        </Heading>
        <Paragraph size="sm" tone="secondary">
          Fill out the fields and we will get in touch.
        </Paragraph>
      </div>

      <form
        name="contact"
        noValidate
        onSubmit={handleSubmit}
        className="space-y-5"
        aria-live="polite"
      >
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-bold leading-6 text-text-primary mb-2"
          >
            Full name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm bg-background-light-yellow border border-line-1 rounded-lg placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue focus:border-primary-blue transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-bold leading-6 text-text-primary mb-2"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="youremail@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm bg-background-light-yellow border border-line-1 rounded-lg placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue focus:border-primary-blue transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-bold leading-6 text-text-primary mb-2"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            placeholder="Tell us how we can help..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm bg-background-light-yellow border border-line-1 rounded-lg placeholder:text-gray-400 resize-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue focus:border-primary-blue transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={status.type === "submitting"}
          className="w-full py-3.5 px-6 bg-primary-blue hover:bg-primary-blue/90 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium text-sm rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue"
        >
          {status.type === "submitting" ? "Sending..." : "Send message"}
        </button>

        {status.message && (
          <p
            role="status"
            className={`text-sm ${
              status.type === "success"
                ? "text-primary-blue"
                : "text-text-secondary"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
