import React from "react";

export type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingVariant = "display" | "h1" | "h3";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Define a tag HTML renderizada (SEO e Acessibilidade) */
  as?: HeadingElement;
  /** Define o estilo visual (tipografia e espaçamentos) */
  variant?: HeadingVariant;
  /** Conteúdo do título */
  children: React.ReactNode;
}

const variantStyles: Record<HeadingVariant, string> = {
  display:
    "text-[40px] sm:text-[52px] lg:text-[64px] leading-11 sm:leading-14 lg:leading-17.5 tracking-[-1px] lg:tracking-[-1.6px] font-extrabold",
  h1: "text-[32px] leading-[36px] tracking-[-0.8px] sm:text-[40px] lg:text-[48px] lg:leading-14 lg:tracking-[-1.2px] font-extrabold",
  h3: "text-[20px] leading-[28px] lg:leading-[32px] font-bold text-text-primary",
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { as = "h1", variant = "display", className = "", children, ...props },
    ref,
  ) => {
    const Component = as;

    const combinedClasses = [
      "font-jakarta text-text-primary",
      variantStyles[variant],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Component ref={ref} className={combinedClasses} {...props}>
        {children}
      </Component>
    );
  },
);

Heading.displayName = "Heading";
