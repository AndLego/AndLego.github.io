import React from "react";
import english from "../../assets/united-states-svgrepo-com.svg";
import espanol from "../../assets/spain-svgrepo-com.svg";

import { motion } from "framer-motion";
import { useWindowWidth } from "../../hooks/useWindowWidth";

import styles from "./NavBar.module.css";

const NavBar = ({ show, setShow, language, handleLanguage }) => {
  const [scroll, setScroll] = React.useState("top");
  const [active, setActive] = React.useState(false);

  const size = useWindowWidth();

  React.useEffect(() => {
    let lastVal = 0;
    window.onscroll = function () {
      let y = window.scrollY;
      if (y > lastVal) {
        setScroll("down");
      }
      if (y < lastVal) {
        setScroll("up");
      }
      if (y === 0) {
        setScroll("top");
      }
      lastVal = y;
    };
  }, []);

  const handleToggle = () => {
    setShow(!show);
    !active ? setActive(true) : setActive(false);
  };

  const chooseLanguage = (lan) => {
    handleLanguage(lan);
  };

  let content = {
    English: {
      about: "about",
      skills: "skills",
      work: "work",
      contact: "contact",
      download: "download cv",
    },
    Español: {
      about: "acerca",
      skills: "habilidades",
      work: "proyectos",
      contact: "contacto",
      download: "Mi cv",
    },
  };

  language === "Español"
    ? (content = content.Español)
    : (content = content.English);

  return (
    <header className={`${styles.navbar} ${show && scroll}`}>
      <nav data-aos="fade-down">
        <a href="/" className={styles.logo_container}>
          A
        </a>
        {size.width <= 760 && (
          <button
            type="button"
            className={`${styles.burger} ${active ? styles.active : ""}`}
            onClick={handleToggle}
          >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </button>
        )}
        <ol
          className={
            size.width > 760
              ? styles.others
              : show
              ? `${styles.gone} ${styles.mobile}`
              : `${styles.pop} ${styles.mobile}`
          }
        >
          <li>
            <a onClick={handleToggle} href="/#about">
              {content.about}
            </a>
          </li>
          <li>
            <a onClick={handleToggle} href="/#skills">
              {content.skills}
            </a>
          </li>
          <li>
            <a onClick={handleToggle} href="/#work">
              {content.work}
            </a>
          </li>
          <li>
            <a onClick={handleToggle} href="/#contact">
              {content.contact}
            </a>
          </li>
          <li>
            {language === "English" ? (
              <a href="/Andres_Leon_cv_en.pdf" download>
                {content.download}
              </a>
            ) : (
              <a href="/Andres_Leon_cv.pdf" download>
                {content.download}
              </a>
            )}
          </li>
        </ol>

        <div
          className={
            size.width > 760
              ? styles.language
              : show
              ? `${styles.gone} ${styles.lan_mobile}`
              : `${styles.pop} ${styles.lan_mobile}`
          }
        >
          <motion.div
            whileTap={{ scale: 0.75 }}
            className={language === "English" ? styles.choosedLanguage : ""}
            onClick={() => chooseLanguage("English")}
          >
            <img src={english} alt="EN" />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className={language === "Español" ? styles.choosedLanguage : ""}
            onClick={() => chooseLanguage("Español")}
          >
            <img src={espanol} alt="ES" />
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export { NavBar };
