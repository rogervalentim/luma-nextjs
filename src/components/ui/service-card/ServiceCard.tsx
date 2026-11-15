import React from "react";
import Link from "next/link";
import { Heading } from "../heading/Heading";
import { Badge } from "../badge/Badge";
import { Paragraph } from "../paragraph/Paragraph";

export interface ServiceCardProps {
  step: string;
  title: string;
  description: string;
  linkText?: string;
  href: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  step,
  title,
  description,
  linkText = "Explore",
  href,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col h-full w-full max-w-full lg:max-w-66.25 rounded-2xl border border-line-1 p-6 lg:p-7 ${className}`}
    >
      <Badge className="mb-[20.5px] h-6 px-2 rounded-md w-fit">{step}</Badge>

      <Heading className="mb-3" variant="h3">
        {title}
      </Heading>

      <Paragraph size="sm" className="mb-5.5">
        {description}
      </Paragraph>

      <Link
        href={href}
        className="mt-auto flex items-center gap-3 text-text-primary font-bold text-sm leading-6 group"
      >
        {linkText}{" "}
        <svg
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          <path
            d="M0.75 5.75H12.75M7.75 10.75L12.75 5.75L7.75 0.75"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#171B2C"
          />
        </svg>
      </Link>
    </div>
  );
};
