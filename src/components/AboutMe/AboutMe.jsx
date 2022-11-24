import React from "react";

import "./AboutMe.css";

const AboutMe = ({ language }) => {
  let content = {
    English: {
      section: "About Me",
      p1: "Hello! My name is Andres and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I got caught by HTML & CSS.",
      p2: "Back then it was just a small hobbie but on early 2022 I decided to full commit on this journey. My main focus these days is to learn, polish and practice as most as I can. We know there's always something new to learn and the coding world is ENORMOUS, right?",
      p3: "So far, i have learned from Platzi, Flyncer, Youtube, CodeWars, and some other platforms.",
    },
    Español: {
      section: "Acerca de Mi",
      p1: "¡Hola! Mi nombre es Andrés y disfruto creando cosas que viven en Internet. Mi interés en el desarrollo web comenzó en 2020 cuando me atrapó HTML y CSS",
      p2: "En ese entonces era solo un pequeño pasatiempo, pero a principios de 2022 decidí comprometerme por completo en este viaje. Mi enfoque principal en estos días es aprender, pulir y practicar lo más que pueda. Sabemos que siempre hay algo nuevo que aprender y el mundo de la programación es ENORME, ¿verdad?",
      p3: "Hasta ahora, he aprendido de Platzi, Flyncer, Youtube, CodeWars y algunas otras plataformas",
    },
  };

  language === "Español"
    ? (content = content.Español)
    : (content = content.English);

  return (
    <section
      id="about"
      className="section-about"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="section-title">
        <span>0.1</span>
        <h2>{content.section}</h2>
      </div>
      <div className="about-content">
        <div className="about-content__text">
          <p>{content.p1}</p>
          <p>{content.p2}</p>
          <p>{content.p3}</p>
        </div>
      </div>
    </section>
  );
};

export { AboutMe };
