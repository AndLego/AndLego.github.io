import React from "react";
import { Prelude } from "../Prelude/Prelude";
import { AboutMe } from "../AboutMe/AboutMe";
import { Skills } from "../Skills/Skills";
import { Work } from "../Work/Work";
import { Contact } from "../Contact/Contact";

import { useWindowWidth } from "../../hooks/useWindowWidth";

import "./MainContent.css";

const MainContent = ({ show }) => {
  const size = useWindowWidth();

  return (
    <div
      className={
        size.width > 760
          ? "main-content"
          : show
          ? "main-content"
          : "main-content blur"
      }
    >
      <Prelude />
      <AboutMe />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export { MainContent };
