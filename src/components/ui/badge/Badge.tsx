import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className = "", ...props }: BadgeProps) => {
  return (
    <div
      {...props}
      className={`bg-primary-blue-light flex justify-center items-center w-fit ${className}`}
    >
      <p className="text-xs sm:text-sm font-bold leading-6 text-primary-blue">
        {children}
      </p>
    </div>
  );
};
