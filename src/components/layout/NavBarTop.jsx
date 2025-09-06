import { useLanguage } from "../../context/LanguageContext.jsx";
import { NavLink } from "react-router-dom";
import Menu from "../layout/Menu.jsx";
import ToolKitBtn from "../common/ToolKitBtn.jsx";
import "../../css/layout/NavBarTop.css";

export default function NavbarTop() {
  const { t } = useLanguage();

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="navbar__title">✿ lauraglab.com</span>
      </div>

      <div className="navbar__center">
        <div className="navbar__links">
          <NavLink className="button" to="/">
            {t("navbar.home")}
          </NavLink>
          <NavLink className="button" to="/projects">
            {t("navbar.projects")}
          </NavLink>
          <NavLink className="button" to="/about">
            {t("navbar.about")}
          </NavLink>
          <NavLink className="button" to="/contact">
            {t("navbar.contact")}
          </NavLink>
        </div>
      </div>
      <Menu />
      <div className="navbar__sys-buttons">
        <ToolKitBtn text="–" />
        <ToolKitBtn text="▢" />
        <ToolKitBtn text="✕" />
      </div>
    </nav>
  );
}