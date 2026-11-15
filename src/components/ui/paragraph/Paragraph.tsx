import React from "react";

export type ParagraphSize = "sm" | "md" | "lg";
export type ParagraphTone = "primary" | "secondary" | "muted";

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: ParagraphSize;
  tone?: ParagraphTone;
  maxWidth?: "none" | "prose" | "hero";
  className?: string;
}

const sizeClasses: Record<ParagraphSize, string> = {
  sm: "text-sm leading-6",
  md: "text-base leading-6",
  lg: "text-[18px] leading-7",
};

const toneClasses: Record<ParagraphTone, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  muted: "text-text-muted",
};

const maxWidthClasses: Record<
  NonNullable<ParagraphProps["maxWidth"]>,
  string
> = {
  none: "",
  prose: "max-w-prose",
  hero: "max-w-full lg:max-w-120",
};

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  size = "lg",
  tone = "secondary",
  maxWidth = "none",
  className = "",
  ...props
}) => {
  const combinedClasses = [
    "font-normal",
    sizeClasses[size],
    toneClasses[tone],
    maxWidthClasses[maxWidth],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <p className={combinedClasses} {...props}>
      {children}
    </p>
  );
};
