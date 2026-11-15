import React, { ElementType, ComponentPropsWithoutRef } from "react";

export type SpacingSize = "none" | "sm" | "md" | "lg";

const spacingMap: Record<SpacingSize, string> = {
  none: "",
  sm: "py-4 md:py-6",
  md: "py-10 md:py-16",
  lg: "py-15 md:py-25",
};

export type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  spacing?: SpacingSize;
  noPadding?: boolean;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
} & Omit<
  ComponentPropsWithoutRef<T>,
  "as" | "spacing" | "noPadding" | "className" | "innerClassName" | "children"
>;

export function Container<T extends ElementType = "div">({
  as,
  spacing = "none",
  noPadding = false,
  className = "",
  innerClassName = "",
  children,
  ...props
}: ContainerProps<T>) {
  const Component = as || "div";

  const outerClasses = [
    "w-full flex justify-center",
    noPadding ? "" : "px-4 md:px-6",
    spacingMap[spacing],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const innerClasses = ["w-full max-w-280", innerClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={outerClasses} {...props}>
      <div className={innerClasses}>{children}</div>
    </Component>
  );
}
