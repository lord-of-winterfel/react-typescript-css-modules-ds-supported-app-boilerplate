export interface ThemeColors {
  primary?: string;
  secondary?: string;
  background?: string;
  text?: string;
  [key: string]: string | undefined;
}

export interface ThemeSpacing {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  [key: string]: string | undefined;
}

export interface ThemeRadius {
  sm?: string;
  md?: string;
  lg?: string;
  [key: string]: string | undefined;
}

export interface ThemeTypography {
  fontFamily?: string;
  fontSize?: Record<string, string>;
  [key: string]: string | Record<string, string> | undefined;
}

export interface Theme {
  colors: ThemeColors;
  spacing: ThemeSpacing;
  radius?: ThemeRadius;
  typography?: ThemeTypography;
}

export const lightTheme: Theme = {
  colors: {
    primary: "#3b82f6",
    secondary: "#64748b",
    background: "#ffffff",
    text: "#0f172a",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  typography: {
    fontFamily: "system-ui, sans-serif",
    fontSize: { sm: "14px", md: "16px", lg: "18px" },
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: "#60a5fa",
    secondary: "#94a3b8",
    background: "#0f172a",
    text: "#f8fafc",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  typography: {
    fontFamily: "system-ui, sans-serif",
    fontSize: { sm: "14px", md: "16px", lg: "18px" },
  },
};

export function createTheme(partial: Partial<Theme> & { colors?: ThemeColors; spacing?: ThemeSpacing }): Theme {
  return {
    ...lightTheme,
    ...partial,
    colors: { ...lightTheme.colors, ...partial.colors },
    spacing: { ...lightTheme.spacing, ...partial.spacing },
    radius: partial.radius ? { ...lightTheme.radius, ...partial.radius } : lightTheme.radius,
    typography: partial.typography
      ? { ...lightTheme.typography, ...partial.typography }
      : lightTheme.typography,
  };
}
