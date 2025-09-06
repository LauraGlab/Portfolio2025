import { useLanguage } from "../../context/LanguageContext.jsx";
import RetroWindow from "./../common/RetroWindow.jsx";
import Project1 from "../../assets/projects/projectCafe.png";
import Project2 from "../../assets/projects/projectCrypto.png";
import Project3 from "../../assets/projects/projectMW.png";
import Project4 from "../../assets/projects/projectPomodoro.png";
import "../../css/sections/Projects.css";

export default function Projects() {
  const { t } = useLanguage();

  const projectsData = [
    {
      image: Project1,
      live: "https://cafechain.vercel.app/#/",
      github: "https://github.com/LauraGlab/CafeChain",
      tech: ["React", "Solidity", "web3.js"],
    },
    {
      image: Project2,
      live: "https://cryptocheck.vercel.app/#/",
      github: "https://github.com/LauraGlab/CryptoCheck",
      tech: ["React"],
    },
    {
      image: Project3,
      live: "https://martyna-winiarska.vercel.app/",
      github: "https://github.com/LauraGlab/MW-lawyer-website",
      tech: ["React"],
    },
    {
      image: Project4,
      live: "https://pomo-track.vercel.app/",
      github: "https://github.com/LauraGlab/PomoTrack",
      tech: ["React"],
    },
  ];

  return (
    <section className="projects">
      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <RetroWindow
            key={idx}
            title={t("projects")[idx].title}
            className="project-card"
          >
            <>
              <img
                src={project.image}
                alt={t("projects")[idx].title}
                className="project-image"
              />
              <div className="project-info">
                <p className="projects__description">
                  {t("projects")[idx].description}
                </p>
                <div className="tech-list">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="skill">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a
                    className="button"
                    target="_blank"
                    href={project.live}
                  >{`🌐 ${t("projects")[idx].btn}`}</a>
                  <a className="button" href={project.github} target="_blank">
                    💻 GitHub
                  </a>
                </div>
              </div>
            </>
          </RetroWindow>
        ))}
      </div>
    </section>
  );
}