import React from "react";

type EyebrowVariant = "blue" | "white";

interface EyebrowProps {
  children: React.ReactNode;
  variant?: EyebrowVariant;
  className?: string;
}

const variantStyles: Record<EyebrowVariant, string> = {
  blue: "text-primary-blue",
  white: "text-background-white",
};

export function Eyebrow({
  children,
  variant = "blue",
  className = "",
}: EyebrowProps) {
  return (
    <span
      className={`block text-xs font-semibold uppercase leading-4 tracking-[1.44px] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
