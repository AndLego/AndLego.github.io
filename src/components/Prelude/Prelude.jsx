import React from "react";
import Parallax from "parallax-js";

import styles from "./Prelude.module.css";
import { TbChevronsDown } from "react-icons/tb";

const Prelude = () => {
  const scene = React.useRef(null);

  // Parallax Code
  React.useEffect(() => {
    let parallax = new Parallax(scene.current);
  }, []);
  return (
    <article data-aos="zoom-in" className={styles.wrapper}>
      <div className={styles.container}>
        <div ref={scene} className={styles.scene} data-hover-only="false">
          <div className={styles.circle} data-depth="1.2" />
          <div className={styles.one} data-depth="0.9">
            <div className={styles.content}>
              <span className={styles.piece} />
              <span className={styles.piece} />
              <span className={styles.piece} />
            </div>
          </div>
          <div className={styles.two} data-depth="0.60">
            <div className={styles.content}>
              <span className={styles.piece} />
              <span className={styles.piece} />
              <span className={styles.piece} />
            </div>
          </div>
          <div className={styles.three} data-depth="0.40">
            <div className={styles.content}>
              <span className={styles.piece} />
              <span className={styles.piece} />
              <span className={styles.piece} />
            </div>
          </div>
          <p className={styles.p404} data-depth="0.50">
            Hi!
          </p>
          <p className={styles.p404} data-depth="0.10">
            Hi!
          </p>
        </div>
        <div className={styles.text}>
          <article>
            <p>
              I'm Andres Leon <br />
              I'am a FullStack Developer - FrontEnd Specialized, Based in
              Bogotá, Colombia
            </p>
            <a href="/#about">
              Scroll down <TbChevronsDown />
            </a>
          </article>
        </div>
      </div>
    </article>
  );
};

export { Prelude };
