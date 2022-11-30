import React from "react";
import { Prelude } from "../Prelude/Prelude";
import { AboutMe } from "../AboutMe/AboutMe";
import { Skills } from "../Skills/Skills";
import { Work } from "../Work/Work";
import { Contact } from "../Contact/Contact";
import Parallax from "parallax-js";

import styles from "./MainContent.module.css";

import { useWindowWidth } from "../../hooks/useWindowWidth";

const MainContent = ({ show, language, setCoords }) => {
  const size = useWindowWidth();
  const scene = React.useRef(null);

  // Parallax Code
  React.useEffect(() => {
    let parallax = new Parallax(scene.current);
  }, []);

  // Scroll handler
  const handleScroll = (e) => {
    setCoords(e.currentTarget.scrollTop);
  };

  return (
    <div
      className={
        size.width > 760
          ? styles.main_content
          : show
          ? styles.main_content
          : `${styles.main_content} ${styles.blur}`
      }
    >
      {/* <article data-aos="zoom-in" className={styles.wrapper}> */}
      <article className={styles.wrapper}>
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
          </div>
          <div className={styles.text} onScroll={handleScroll}>
            <Prelude language={language} />
            <AboutMe language={language} />
            <Skills language={language} />
            <Work language={language} />
            <Contact language={language} />
          </div>
        </div>
      </article>
    </div>
  );
};

export { MainContent };
