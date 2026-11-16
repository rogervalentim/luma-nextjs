"use client";

import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário aqui
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full lg:max-w-120 px-5 py-6 lg:p-10 bg-background-white border border-line-1 rounded-2xl">
      {/* Cabeçalho do Card */}
      <div className="mb-6">
        <Heading variant="h4" as="h4" className="mb-2">
          Contact us
        </Heading>
        <Paragraph size="sm" tone="secondary">
          Fill out the fields and we will get in touch.
        </Paragraph>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold leading-6 text-text-primary mb-2"
          >
            Full name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 text-sm bg-background-light-yellow border border-line-1 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold leading-6 text-text-primary mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="youremail@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 text-sm bg-background-light-yellow border border-line-1 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="question"
            className="block text-sm font-bold leading-6 text-text-primary mb-2"
          >
            Your question
          </label>
          <textarea
            id="question"
            rows={4}
            required
            placeholder="Tell us how we can help..."
            value={formData.question}
            onChange={(e) =>
              setFormData({ ...formData, question: e.target.value })
            }
            className="w-full px-4 py-3 text-sm bg-background-light-yellow border border-line-1 rounded-lg placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-6 bg-primary-blue hover:bg-primary-blue/90 text-white font-medium text-sm rounded-lg transition-colors cursor-pointer"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
