import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { FilterProvider } from "./context";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </StrictMode>,
  rootElement
);
