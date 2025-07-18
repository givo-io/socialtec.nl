// src/components/ui/card.jsx
import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      {...props}
      className={`bg-white shadow-md rounded-md p-4 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div {...props} className={`p-2 ${className}`}>
      {children}
    </div>
  );
}

