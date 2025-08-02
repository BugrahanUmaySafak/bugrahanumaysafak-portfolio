import type React from "react";
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-screen-xl px-6 sm:px-12 lg:px-24 ${className}`}
    >
      {children}
    </div>
  );
}
