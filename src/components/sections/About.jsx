import { useLanguage } from "../../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
import RetroWindow from "./../common/RetroWindow.jsx";
import AboutImg from "./../../assets/aboutMe.png";
import "../../css/sections/About.css";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="about" id="about">
      <div className="about__content">
        <div className="about__image-wrapper">
          <img src={AboutImg} alt="About Me" className="about__image" />
          <div className="sparkle-container">
            {Array.from({ length: 15 }).map((_, idx) => (
              <span key={idx} className="sparkle"></span>
            ))}
          </div>
        </div>
        <RetroWindow title={t("about.title")} className="about__text">
          <div>
            <p>{t("about.text")}</p>
            <div className="about__skills">
              <span className="skill">React</span>
              <span className="skill">CSS</span>
              <span className="skill">HTML</span>
              <span className="skill">JavaScript</span>
              <span className="skill">{t("about.skillFirst")}</span>
              <span className="skill">Solidity ({t("about.skillDesc")})</span>
            </div>
            <Link className="button" to="/contact">
              {t("contact.title")}
            </Link>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
}
