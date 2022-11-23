import React from "react";
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { Form } from "../Form/Form";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className={styles.contact}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h2>0.4 What's Next?</h2>
      <h1>Get in Touch</h1>
      <p>
        I'm looking for any new opportunities, my inbox is always open. Wether
        you have a question or just want to say hi. I'll try my best to get back
        to you!
      </p>
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
      <Form />
    </section>
  );
};

export { Contact };
