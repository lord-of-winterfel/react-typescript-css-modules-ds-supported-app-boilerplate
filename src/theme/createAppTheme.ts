import { createTheme, lightTheme } from "my-ui";
import { colors, spacing, radius, typography } from "../tokens";

export const appTheme = createTheme({
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: colors.primary,
    secondary: colors.secondary,
    background: colors.background,
    text: colors.text,
  },
  spacing,
  radius,
  typography,
});
