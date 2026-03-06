import { useContext, type HTMLAttributes, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ style, children, ...props }: CardProps) {
  const theme = useContext(ThemeContext);
  const radius = theme?.radius?.md ?? "8px";
  const pad = theme?.spacing.md ?? "16px";

  return (
    <div
      style={{
        backgroundColor: theme?.colors.background ?? "#fff",
        border: `1px solid ${theme?.colors.secondary ?? "#e2e8f0"}`,
        borderRadius: radius,
        padding: pad,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
