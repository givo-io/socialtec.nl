// src/components/ui/input.jsx
import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`border rounded px-3 py-2 w-full ${className}`}
    />
  );
}

