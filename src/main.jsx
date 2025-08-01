import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ContextProvider from "./context/context.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
