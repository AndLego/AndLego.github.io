import React from "react";
import english from "../../assets/united-states-svgrepo-com.svg";
import espanol from "../../assets/spain-svgrepo-com.svg";

import { motion } from "framer-motion";
import { useWindowWidth } from "../../hooks/useWindowWidth";

import styles from "./NavBar.module.css";

const NavBar = ({ show, setShow, language, handleLanguage, coords }) => {
  const [scroll, setScroll] = React.useState(styles.top);
  const [lastCoord, setLastCoord] = React.useState(0);
  const [activeBurger, setActiveBurger] = React.useState(false);

  const size = useWindowWidth();

  React.useEffect(() => {
    let y = coords;
    if (y > lastCoord) {
      setScroll(styles.down);
    }
    if (y < lastCoord) {
      setScroll(styles.up);
    }
    if (y === 0) {
      setScroll(styles.top);
    }
    setLastCoord(y);
  }, [coords]);

  const handleToggle = () => {
    setShow(!show);
    !activeBurger ? setActiveBurger(true) : setActiveBurger(false);
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
    <header
      className={`${styles.navbar} ${
        size.width > 760 ? scroll : show && scroll
      }`}
    >
      <nav data-aos="fade-down">
        <a href="/" className={styles.logo_container}>
          A
        </a>
        {size.width <= 760 && (
          <button
            type="button"
            className={`${styles.burger} ${
              activeBurger ? styles.activeBurger : ""
            }`}
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
            <a onClick={handleToggle} href="/#about_marker">
              {content.about}
            </a>
          </li>
          <li>
            <a onClick={handleToggle} href="/#skill_marker">
              {content.skills}
            </a>
          </li>
          <li>
            <a onClick={handleToggle} href="/#work_marker">
              {content.work}
            </a>
          </li>
          <li>
            <a onClick={handleToggle} href="/#contact_marker">
              {content.contact}
            </a>
          </li>
          <li>
            {language === "English" ? (
              <a href="/FrontEnd_Andres_Leon_cv_en.pdf" download>
                {content.download}
              </a>
            ) : (
              <a href="/FrontEnd_Andres_Leon_cv.pdf" download>
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
