import React from "react";

import { Intro } from "./components/Intro/Intro";
import { NavBar } from "./components/NavBar/NavBar";
import { Sidebars } from "./components/Sidebars/Sidebars";
import { MainContent } from "./components/MainContent/MainContent";

import styles from "./components/NavBar/NavBar.module.css";

import "./App.css";

const App = () => {
  const [intro, setIntro] = React.useState(true);
  const [show, setShow] = React.useState(true);
  const languageStoredInLocalStorage = localStorage.getItem("language");
  const [language, setLanguage] = React.useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );
  const [coords, setCoords] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setIntro(false);
    }, 4000);
  }, []);

  return (
    <>
      {intro && <Intro />}
      {!intro && (
        <>
          <NavBar
            language={language}
            handleLanguage={(language) => {
              setLanguage(language);
              storeLanguageInLocalStorage(language);
            }}
            show={show}
            setShow={setShow}
            coords={coords}
          />
          <Sidebars />
          <MainContent language={language} show={show} setCoords={setCoords} />
        </>
      )}
    </>
  );
};

const storeLanguageInLocalStorage = (language) => {
  localStorage.setItem("language", language);
};

export { App };
