import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "./error-boundry";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>Error</h1>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
