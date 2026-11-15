import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "outline";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  className?: string;
};

// 2. Defina os estilos visuais de cada variação
const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent text-background-white bg-primary-blue hover:bg-primary-blue/90",
  outline:
    "border border-line-1 text-text-primary bg-background-white hover:bg-background-white/90 transition-colors hover:border-slate-300 hover:bg-slate-50/80 hover:shadow-xs focus-visible:ring-slate-400 active:bg-slate-100",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-6 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className,
  type = "button",
  ...props
}: ButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onClick">) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex w-fit items-center justify-center gap-2 rounded-lg font-bold leading-6 cursor-pointer transition-colors duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
