import { useState, useEffect } from "react";
import { useLanguage } from "../../../context/LanguageContext.jsx";
import "../../../css/sections/hero/HeroTitle.css";

export default function HeroTitle() {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fullText = isMobile ? "Laura Głąb" : t("hero.title");

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = 100;
    let timeout;

    if (!isDeleting && index < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, index - 1));
        setIndex(index - 1);
      }, speed);
    } else if (index === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (index === 0 && isDeleting) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);

  return (
    <h1 className="hero__title">
      {displayedText}
      <span className="cursor">|</span>
    </h1>
  );
}
