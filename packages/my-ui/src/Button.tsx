import { useContext, type ButtonHTMLAttributes } from "react";
import { ThemeContext } from "./ThemeContext";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  style,
  children,
  ...props
}: ButtonProps) {
  const theme = useContext(ThemeContext);
  const bg = variant === "primary" ? theme?.colors.primary : theme?.colors.secondary;
  const pad =
    size === "sm"
      ? theme?.spacing.sm
      : size === "lg"
        ? theme?.spacing.lg
        : theme?.spacing.md;
  const radius = theme?.radius?.md ?? "8px";

  return (
    <button
      type="button"
      style={{
        backgroundColor: bg,
        color: "#fff",
        padding: `${pad} ${pad}`,
        borderRadius: radius,
        border: "none",
        cursor: "pointer",
        fontWeight: 600,
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
