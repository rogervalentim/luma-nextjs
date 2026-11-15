import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <div
      className={` bg-primary-blue-light flex justify-center items-center w-fit ${className}`}
    >
      <p className="text-xs sm:text-sm font-bold leading-6 text-primary-blue">
        {children}
      </p>
    </div>
  );
};
