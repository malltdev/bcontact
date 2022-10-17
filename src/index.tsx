import React from "react";
import ReactDOM from "react-dom/client";
import root from "react-shadow/styled-components";
import App from "./App";

const rootElement = ReactDOM.createRoot(
  document.getElementById("BContact") as HTMLElement
);

rootElement.render(
  <React.StrictMode>
    <root.div>
      <App />
    </root.div>
  </React.StrictMode>
);
