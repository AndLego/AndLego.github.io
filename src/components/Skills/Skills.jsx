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
  SiMongodb
} from "react-icons/si";

import "./Skills.css";

const Skills = () => {
  return (
    <section
      id="skills"
      className="section-skills"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="section-title title-skills">
        <span>0.2</span>
        <h2>Development Skills</h2>
      </div>
      <div className="skills-content">
        <p>
          Here are some of the technologies I've been working with. To see my
          skills in action, checkout my <a href="/#work">portfolio</a> or{" "}
          <a href="/#contact">get in touch</a> and tell me about your project
          idea!
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
