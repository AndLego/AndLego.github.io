import React from "react";
import styles from "./Form.module.css";
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

const Form = ({ language }) => {
  const [contact, setContact] = React.useState(true);
  const [thanks, setThanks] = React.useState(false);

  const [visitor, setVisitor] = React.useState("");
  const [visitomMail, setVisitorMail] = React.useState("");
  const [visitorMessage, setVisitorMessage] = React.useState("");

  ////cuadrar un estado para la form y otro para thanks, para manerja el laoding
  const user = React.useRef("");
  const email = React.useRef("");
  const message = React.useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setVisitor(user.current.value);
    setVisitorMail(email.current.value);
    setVisitorMessage(message.current.value);

    fetch("https://formsubmit.co/ajax/a51786e5a2dea09ba6522b2cbbac739d", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: user.current.value,
        email: email.current.value,
        message: message.current.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    setContact(false);
    setThanks(true);
  };

  const handleBack = () => {
    setVisitor("");
    setVisitorMail("");
    setVisitorMessage("");

    setContact(true);
    setThanks(false);
  };

  let englishForm = (
    <>
      <span style={{ transitionDelay: "0ms" }}>N</span>
      <span style={{ transitionDelay: "50ms" }}>a</span>
      <span style={{ transitionDelay: "100ms" }}>m</span>
      <span style={{ transitionDelay: "150ms" }}>e</span>
    </>
  );
  let spanishForm = (
    <>
      <span style={{ transitionDelay: "0ms" }}>N</span>
      <span style={{ transitionDelay: "50ms" }}>o</span>
      <span style={{ transitionDelay: "100ms" }}>m</span>
      <span style={{ transitionDelay: "150ms" }}>b</span>
      <span style={{ transitionDelay: "200ms" }}>r</span>
      <span style={{ transitionDelay: "250ms" }}>e</span>
    </>
  );

  let englishMsg = (
    <>
      <span style={{ transitionDelay: "0ms" }}>M</span>
      <span style={{ transitionDelay: "50ms" }}>e</span>
      <span style={{ transitionDelay: "100ms" }}>s</span>
      <span style={{ transitionDelay: "150ms" }}>s</span>
      <span style={{ transitionDelay: "200ms" }}>a</span>
      <span style={{ transitionDelay: "250ms" }}>g</span>
      <span style={{ transitionDelay: "300ms" }}>e</span>
    </>
  );

  let spanishMsg = (
    <>
      <span style={{ transitionDelay: "0ms" }}>M</span>
      <span style={{ transitionDelay: "50ms" }}>e</span>
      <span style={{ transitionDelay: "100ms" }}>n</span>
      <span style={{ transitionDelay: "150ms" }}>s</span>
      <span style={{ transitionDelay: "200ms" }}>a</span>
      <span style={{ transitionDelay: "250ms" }}>j</span>
      <span style={{ transitionDelay: "300ms" }}>e</span>
    </>
  );

  let content = {
    English: {
      h1: "Thanks",
      p1: "I'll answer you as soon as i can.",
      p2: "Also feel free to contact on:",
      but: "Send another one",
    },
    Español: {
      h1: "Gracias",
      p1: "Responderé lo mas rapido posible",
      p2: "Sientete libre de contactarme en:",
      but: "Mandar otro",
    },
  };

  language === "Español"
    ? (content = content.Español)
    : (content = content.English);

  return (
    <>
      {contact && (
        <form
          className={styles.form}
          autoComplete="off"
          action="https://formsubmit.co/a51786e5a2dea09ba6522b2cbbac739d"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="New email wooo!" />
          {/* User */}
          <div className={styles.input}>
            <input ref={user} type="text" name="name" required />
            <label>{language === "English" ? englishForm : spanishForm}</label>
          </div>
          {/* Email */}
          <div className={styles.input}>
            <input ref={email} type="email" name="email" required />
            <label>
              <span style={{ transitionDelay: "0ms" }}>E</span>
              <span style={{ transitionDelay: "50ms" }}>m</span>
              <span style={{ transitionDelay: "100ms" }}>a</span>
              <span style={{ transitionDelay: "150ms" }}>i</span>
              <span style={{ transitionDelay: "200ms" }}>l</span>
            </label>
          </div>

          <div className={styles.input}>
            <textarea ref={message} type="text" name="text" required rows="5" />
            <label>{language === "English" ? englishMsg : spanishMsg}</label>
          </div>
          {/* Message */}
          <button>{language === "English" ? "Send" : "Enviar"}</button>
        </form>
      )}
      {thanks && (
        <div className={styles.form}>
          <h1>
            {content.h1} {visitor}!
          </h1>
          <p className={styles.thanks}>{content.p1}</p>
          <p className={styles.thanks}>{content.p2}</p>
          <ol className={styles.contacts}>
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
          </ol>
          <button onClick={handleBack}>{content.but}</button>
        </div>
      )}
    </>
  );
};

export { Form };
