import React from "react";
import { useDarkMode } from "../../context/DarkModeContext.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../../css/layout/NavBarBottom.css";

export default function NavbarBottom() {
  const { toggleLang, lang, t } = useLanguage();
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="navbar-bottom">
      <div className="navbar-bottom__links">
        <a
          href="https://github.com/LauraGlab"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/laura-glab/"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/laurag.333/"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="navbar-bottom__display">
        <p>
          {t("navbar.rightsFirst")} <strong>♥</strong> {t("navbar.rightsSecond")}
        </p>
      </div>
      <div className="navbar-bottom__switches">
        <button onClick={toggleDarkMode} className="button">
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button onClick={toggleLang} className="button">
          {lang === "pl" ? "EN" : "PL"}
        </button>
      </div>
    </div>
  );
}