import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiWebpack,
  SiNodedotjs,
  SiGit,
  SiGraphql,
  SiMongodb,
} from "react-icons/si";

import "./Skills.css";

const Skills = ({ language }) => {
  let content = {
    English: {
      section: "Development Skills",
      p1: "Here are some of the technologies I've been working with. To see my skills in action, checkout my ",
      a1: "portfolio",
      p2: "or",
      a2: "get in touch",
      p3: "and tell me about your project idea!",
    },
    Español: {
      section: "Habilidades de Desarrollo",
      p1: "Estas son algunas de las tecnologías con las que he estado trabajando. Para ver mis habilidades en acción, echa un vistazo a mi ",
      a1: "portafolio",
      p2: "o",
      a2: "contactame",
      p3: "¡y cuéntame sobre tu idea de proyecto!",
    },
  };

  language === "Español"
    ? (content = content.Español)
    : (content = content.English);

  return (
    <section
      id="skills"
      className="section-skills"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="section-title title-skills">
        <span>0.2</span>
        <h2>{content.section}</h2>
      </div>
      <div className="skills-content">
        <p>
          {content.p1}
          <a href="/#work">{content.a1}</a> {content.p2}{" "}
          <a href="/#contact">{content.a2}</a>
        </p>
        <div className="skill-extras">
          <div className="tech-container">
            <div className="tech-item">
              <SiReact />
              <span>React.js</span>
            </div>
            <div className="tech-item">
              <SiJavascript />
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <SiGraphql />
              <span>GraphQL</span>
            </div>
            <div className="tech-item">
              <SiMongodb />
              <span>Mongodb</span>
            </div>
            <div className="tech-item">
              <SiNodedotjs />
              <span>Node.js</span>
            </div>
            <div className="tech-item">
              <SiWebpack />
              <span>Webpack</span>
            </div>
            <div className="tech-item">
              <SiHtml5 />
              <span>Html</span>
            </div>
            <div className="tech-item">
              <SiCss3 />
              <span>CSS</span>
            </div>
            <div className="tech-item">
              <SiGit />
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skills };
