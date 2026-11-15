import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <div
      className={`px-1.5 h-7 sm:h-8 bg-primary-blue-light rounded-lg flex justify-center items-center w-fit ${className}`}
    >
      <p className="text-xs sm:text-sm font-bold leading-6 text-primary-blue">
        {children}
      </p>
    </div>
  );
};
