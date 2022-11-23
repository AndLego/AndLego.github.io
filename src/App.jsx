import React from "react";

import { Intro } from "./components/Intro/Intro";
import { NavBar } from "./components/NavBar/NavBar";
import { Sidebars } from "./components/Sidebars/Sidebars";
import { MainContent } from "./components/MainContent/MainContent";

import "./App.css";

const App = () => {
  const [intro, setIntro] = React.useState(true);
  const [show, setShow] = React.useState(true);

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
          <NavBar show={show} setShow={setShow} />
          <Sidebars />
          <MainContent show={show} />
        </>
      )}
    </>
  );
};

export { App };