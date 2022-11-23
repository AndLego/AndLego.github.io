import React from "react";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="section-about"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="section-title">
        <span>0.1</span>
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <div className="about-content__text">
          <p>
            Hello! My name is Andres and I enjoy creating things that live on
            the internet. My interest in web development started back in 2020
            when I got caught by HTML & CSS.
          </p>
          <p>
            Back then it was just a small hobbie but on early 2022 I decided to
            full commit on this journey. My main focus these days is to learn,
            polish and practice as most as I can. We know there's always
            something new to learn and the coding world is ENORMOUS, right?
          </p>
          <p>
            So far, i have learned from Platzi, Flyncer, Youtube, CodeWars, and
            some other platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export { AboutMe };
