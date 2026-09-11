import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow" | "full";
}

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
    full: "w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto px-6 sm:px-8 lg:px-12",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}
