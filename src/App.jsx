import { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useLanguage } from "./context/LanguageContext.jsx";
import Cursor from "./components/common/Cursor.jsx";
import NavbarBottom from "./components/layout/NavBarBottom.jsx";
import NavbarTop from "./components/layout/NavBarTop.jsx";
import Hero from "./components/sections/hero/Hero.jsx";
import Projects from "./components/sections/Projects.jsx";
import About from "./components/sections/About.jsx";
import Contact from "./components/sections/Contact.jsx";
import Loader from "./components/common/Loader.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";

export default function App() {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const prefix = "Laura Głąb |";
    switch (location.pathname) {
      case "/projects":
        document.title = `${prefix} ${t("navbar.projects")}`;
        break;
      case "/about":
        document.title = `${prefix} ${t("navbar.about")}`;
        break;
      case "/contact":
        document.title = `${prefix} ${t("navbar.contact")}`;
        break;
      default:
        document.title = `${prefix} Front-End Developer`;
    }
  }, [location.pathname]);

  return (
    <main>
      <Loader />
      <Cursor />
      <NavbarTop />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <NavbarBottom />
    </main>
  );
}
