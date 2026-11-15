import React from "react";

export type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingVariant =
  "display" | "displaySm" | "h1" | "h2" | "h3" | "h4";
export type HeadingColor = "primary" | "primaryBlue" | "white";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingElement;
  variant?: HeadingVariant;
  color?: HeadingColor;
  children: React.ReactNode;
}

const variantStyles: Record<HeadingVariant, string> = {
  display:
    "text-[40px] sm:text-[52px] lg:text-[64px] leading-11 sm:leading-14 lg:leading-17.5 tracking-[-1px] lg:tracking-[-1.6px] font-extrabold",
  displaySm:
    "text-[36px]  lg:text-[56px] leading-[40px]  lg:leading-[64px] tracking-[-0.9px] lg:tracking-[-1.4px] font-extrabold",
  h1: "text-[32px] leading-[36px] tracking-[-0.8px] sm:text-[40px] lg:text-[48px] lg:leading-14 lg:tracking-[-1.2px] font-extrabold",
  h2: "text-[20px] leading-[32px] tracking-[0px] lg:text-[30px] font-semibold lg:leading-[44px] lg:tracking-[-0.75px]",
  h3: "text-[20px] leading-[28px] lg:leading-[32px] font-bold",
  h4: "text-[20px] leading-[32px] tracking-[0px] font-bold",
};

const colorStyles: Record<HeadingColor, string> = {
  primary: "text-text-primary",
  primaryBlue: "text-primary-blue",
  white: "text-white",
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      as = "h1",
      variant = "display",
      color = "primary",
      className = "",
      children,
      ...props
    },
    ref,
  ) => {
    const Component = as;

    const combinedClasses = [
      "font-jakarta",
      variantStyles[variant],
      colorStyles[color],
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
