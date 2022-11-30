import React from "react";

import styles from "./Prelude.module.css";
import { ScrollButton } from "./ScrollButton/ScrollButton";

const Prelude = ({ language }) => {
  let content = {
    English: {
      hi: "Hi!",
      who: "I'm Andres Leon",
      job: "I'am a FullStack Developer - FrontEnd Specialized. Based in Bogotá, Colombia",
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
    // <article data-aos="zoom-in" className={styles.wrapper}>
    //   <div className={styles.container}>
    //     <div ref={scene} className={styles.scene} data-hover-only="false">
    //       <div className={styles.circle} data-depth="1.2" />
    //       <div className={styles.one} data-depth="0.9">
    //         <div className={styles.content}>
    //           <span className={styles.piece} />
    //           <span className={styles.piece} />
    //           <span className={styles.piece} />
    //         </div>
    //       </div>
    //       <div className={styles.two} data-depth="0.60">
    //         <div className={styles.content}>
    //           <span className={styles.piece} />
    //           <span className={styles.piece} />
    //           <span className={styles.piece} />
    //         </div>
    //       </div>
    //       <div className={styles.three} data-depth="0.40">
    //         <div className={styles.content}>
    //           <span className={styles.piece} />
    //           <span className={styles.piece} />
    //           <span className={styles.piece} />
    //         </div>
    //       </div>
    //       {/* <p className={styles.p404} data-depth="0.50">
    //         {content.hi}
    //       </p>
    //       <p className={styles.p404} data-depth="0.10">
    //         {content.hi}
    //       </p> */}
    //     </div>
    //     <div className={styles.text}>
    //     </div>
    //   </div>
    // </article>
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
