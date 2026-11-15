import React from "react";

export type ParagraphSize = "xs" | "sm" | "default" | "md" | "lg";
export type ParagraphTone = "primary" | "secondary" | "white" | "tertiary";
export type ParagraphVariant = "default" | "outlined";

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: ParagraphSize;
  tone?: ParagraphTone;
  variant?: ParagraphVariant;
  maxWidth?: "none" | "prose" | "hero";
  className?: string;
}

const sizeClasses: Record<ParagraphSize, string> = {
  xs: "text-xs leading-4 tracking-[1.44px] font-semibold",
  sm: "text-sm font-normal leading-6",
  default: "text-base font-normal leading-7",
  md: "text-sm leading-6 lg:text-base lg:leading-7",
  lg: "text-[18px] leading-7",
};

const toneClasses: Record<ParagraphTone, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  tertiary: "text-text-tertiary",
  white: "text-white",
};

const variantClasses: Record<
  ParagraphVariant,
  Record<ParagraphTone, string>
> = {
  default: {
    primary: "",
    white: "",
    secondary: "",
    tertiary: "",
  },
  outlined: {
    primary:
      "inline-flex items-center justify-center rounded-lg border border-text-primary px-3.5 py-1.5",
    secondary:
      "inline-flex items-center justify-center rounded-lg border border-text-text-secondary px-3.5 py-1.5",
    white:
      "inline-flex items-center justify-center rounded-lg border border-line-1 px-3.5 py-1.5",
    tertiary:
      "inline-flex items-center justify-center rounded-lg border border-tertiary px-3.5 py-1.5",
  },
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
  tone = "primary",
  variant = "default",
  maxWidth = "none",
  className = "",
  ...props
}) => {
  const combinedClasses = [
    "font-normal",
    sizeClasses[size],
    toneClasses[tone],
    variantClasses[variant][tone],
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
