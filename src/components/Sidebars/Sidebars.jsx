import React from "react";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

import "./Sidebars.css";

const Sidebars = () => {
  return (
    <>
      <div className="sidebar-left" data-aos="fade-up">
        <ul>
          <li>
            <a target="_blank" href="https://github.com/andlego">
              <FiGithub />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/andlegocode">
              <FiTwitter />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/andlego">
              <FiLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-right" data-aos="fade-up">
        <div>
          <a href="/#contact">galeon.gb@gmail.com</a>
        </div>
      </div>
    </>
  );
};

export { Sidebars };
