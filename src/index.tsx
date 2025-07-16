// index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Make sure App.tsx exists and is in the same folder



const rootElement = document.getElementById("app");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Root element with ID 'app' not found.");
}



