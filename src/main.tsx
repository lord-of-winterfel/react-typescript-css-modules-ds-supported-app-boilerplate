import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "my-ui";
import { appTheme } from "./theme/createAppTheme";
import { App } from "./app/App";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
