import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ContentProvider } from "./context";
import { ThemeProvider } from "./theme-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <ContentProvider>
        <App />
      </ContentProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
