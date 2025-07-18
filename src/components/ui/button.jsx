import React from "react";

export function Button({ children, className = "", size = "md", ...props }) {
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const allClasses = `
    bg-primary text-primary-foreground hover:bg-primary/90 rounded
    ${sizeClasses[size] || sizeClasses.md}
    ${className}
  `.trim();

  return (
    <button {...props} className={allClasses}>
      {children}
    </button>
  );
}
