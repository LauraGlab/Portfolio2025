import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import "./css/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <DarkModeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </DarkModeProvider>
    </Router>
  </StrictMode>
);