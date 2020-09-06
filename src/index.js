import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "theme-ui";
import { swiss } from "@theme-ui/presets";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={swiss}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
