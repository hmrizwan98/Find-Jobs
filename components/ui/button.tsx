"use client";

import React from "react";
import { cn } from "../lib/utils";

type Variant = "primary" | "secondary" | "outline";
type Size = "xs" | "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "xs",
  className,
  ...props
}) => {
  const baseStyles =
    "items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variantStyles: Record<Variant, string> = {
    primary: "bg-blue text-white hover:bg-blue/80",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
  };

  const sizeStyles: Record<Size, string> = {
    xs: "px-[30px] py-[10px] text-xs",
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-[10px] text-base leading-[100%] tracking-[0%]",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
