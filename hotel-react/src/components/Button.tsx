
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  to?: string;
}

export function Button({
  className,
  variant = "default",
  size = "default",
  to,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
    variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
    variant === "outline" && "border border-primary text-foreground hover:bg-primary/10 hover:text-primary",
    variant === "ghost" && "text-foreground hover:bg-accent hover:text-accent-foreground",
    variant === "link" && "text-primary underline-offset-4 hover:underline",
    size === "default" && "h-10 px-6 py-2 rounded-md",
    size === "sm" && "h-9 px-4 text-sm rounded-md",
    size === "lg" && "h-12 px-8 text-lg rounded-md",
    size === "icon" && "h-10 w-10 rounded-full",
    className
  );
  
  if (to) {
    return (
      <Link to={to} className={baseStyles}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  );
}
