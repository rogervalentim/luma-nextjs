import { cn } from "@/lib/utils";
import Link, { type LinkProps } from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type ButtonVariant = "primary" | "outline" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
};

type ButtonAsButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined;
  };

type ButtonAsLinkProps = BaseButtonProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof BaseButtonProps | "href"
  > &
  Omit<LinkProps, "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent text-background-white bg-primary-blue hover:bg-primary-blue/90",
  outline:
    "border border-line-1 text-text-primary bg-background-white hover:bg-background-white/90 transition-colors hover:border-slate-400 hover:bg-slate-50/80 hover:shadow-xs focus-visible:ring-slate-400 active:bg-slate-100",
  secondary:
    "border border-transparent text-text-primary bg-secondary-yellow hover:bg-secondary-yellow/90 transition-colors",
  ghost:
    "border border-transparent flex gap-2 items-center bg-transparent text-background-white hover:bg-background-white/10 active:bg-background-white/20 focus-visible:ring-background-white/50",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm lg:h-[54px]",
  lg: "px-6 py-4 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex w-fit items-center justify-center gap-2 rounded-lg font-bold  cursor-pointer transition-colors duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    disabled && "pointer-events-none cursor-not-allowed opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (props.href !== undefined) {
    const { href, onClick, ...linkProps } = props;

    return (
      <Link
        href={href}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            return;
          }
          onClick?.(e);
        }}
        className={classes}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
