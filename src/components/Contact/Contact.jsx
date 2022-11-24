import React from "react";
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { Form } from "../Form/Form";

import styles from "./Contact.module.css";

const Contact = ({ language }) => {
  let content = {
    English: {
      pre: "What's Next?",
      section: "Get in Touch",
      p1: "I'm looking for any new opportunities, my inbox is always open. Wether you have a question or just want to say hi. I'll try my best to get back to you!",
    },
    Español: {
      pre: "Que Sigue?",
      section: "Contactame",
      p1: "Estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o simplemente quieras saludar. ¡Haré todo lo posible para responderte!",
    },
  };

  language === "Español"
    ? (content = content.Español)
    : (content = content.English);

  return (
    <section
      id="contact"
      className={styles.contact}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h2>0.4 {content.pre}</h2>
      <h1>{content.section}</h1>
      <p>{content.p1}</p>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/andlego">
            <FiGithub />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/andlegocode">
            <FiTwitter />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/andlego">
            <FiLinkedin />
          </a>
        </li>
      </ul>
      <Form language={language} />
    </section>
  );
};

export { Contact };
