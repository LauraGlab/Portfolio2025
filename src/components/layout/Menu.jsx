import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ToolKitBtn from "../common/ToolKitBtn.jsx";
import "../../css/layout/Menu.css";

export default function Menu() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { path: "/", label: t("navbar.home") },
    { path: "/projects", label: t("navbar.projects") },
    { path: "/about", label: t("navbar.about") },
    { path: "/contact", label: t("navbar.contact") },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="menu-container">
      <ToolKitBtn isHamburger={true} isOpen={isOpen} toggleMenu={toggleMenu} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="menu-links">
              {routes.map(({ path, label }) => (
                <li key={path}>
                  <Link className="button" to={path} onClick={closeMenu}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}