import { useLanguage } from "../../../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
import HeroTitle from "./HeroTitle.jsx";
import RetroWindow from "./../../common/RetroWindow.jsx";
import "../../../css/sections/hero/Hero.css";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="hero">
      <RetroWindow className="hero-window" title={t("hero.titleBar")}>
        <div className="hero__content">
          <div className="hero__text">
            <HeroTitle />
            <p className="hero__subtitle">{t("hero.subtitle")}</p>
            <Link className="button" to="/projects">
              {t("hero.cta")}
            </Link>
          </div>
        </div>
      </RetroWindow>
    </div>
  );
}
