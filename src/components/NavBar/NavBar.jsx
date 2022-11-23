import React from "react";

import { useWindowWidth } from "../../hooks/useWindowWidth";

import styles from "./NavBar.module.css";

const NavBar = ({ show, setShow }) => {
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
              About
            </a>
          </li>
          <li>
            <a onClick={handleToggle} href="/#skills">
              Skills
            </a>
          </li>
          <li>
            <a onClick={handleToggle} href="/#work">
              Work
            </a>
          </li>
          <li>
            <a onClick={handleToggle} href="/#contact">
              Contact
            </a>
          </li>
          <li>
            <a href="/Andres_Leon_cv_en.pdf" download>
              Download CV
            </a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export { NavBar };
