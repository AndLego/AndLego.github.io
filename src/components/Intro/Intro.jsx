import React from "react";

import { motion } from "framer-motion";

import "./Intro.css";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(28, 28, 28, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(28, 28, 28, 1)",
  },
};

const Intro = () => {
  const [out, setOut] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setOut(false);
    }, 3000);
  }, []);

  return (
    <div className="intro-container">
      <div className={out ? "container" : "container fade-out"}>
        <p
          className="intro-text"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          A
        </p>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-4 -2 50 50"
          className="item"
        >
          <motion.path
            d="M 0 22 a 1 1 0 0 0 43 0 A 1 1 0 0 0 0 22 Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export { Intro };
