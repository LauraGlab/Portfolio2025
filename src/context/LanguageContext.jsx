import React, { createContext, useState, useContext } from "react";
import { translations } from "../i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("pl");

  const toggleLang = () => {
    setLang((prev) => (prev === "pl" ? "en" : "pl"));
  };

  const t = (path) => {
    return (
      path.split(".").reduce((obj, key) => obj?.[key], translations[lang]) ||
      path
    );
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
