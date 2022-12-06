import React from "react";

import styles from "./Prelude.module.css";
import { ScrollButton } from "./ScrollButton/ScrollButton";

const Prelude = ({ language }) => {
  let content = {
    English: {
      hi: "Hi!",
      who: "I'm Andres Leon",
      job: "I'm a FullStack Developer - FrontEnd Specialized. Based in Bogotá, Colombia",
    },
    Español: {
      hi: "Hola!",
      who: "Soy Andres Leon",
      job: "Soy un Desarrollador FullStack - Especializado en FrontEnd, con base en Bogotá, Colombia",
    },
  };

  language === "Español"
    ? (content = content.Español)
    : (content = content.English);

  return (
    <section className={styles.Prelude}>
      <p className={styles.p404} data-depth="0.50">
        {content.hi}
      </p>
      <p>
        {content.who} <br />
        {content.job}
      </p>
      <a href="/#about">
        <ScrollButton />
      </a>
    </section>
  );
};

export { Prelude };
