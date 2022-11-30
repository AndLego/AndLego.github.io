import React from "react";
import styles from "./ScrollButton.module.css";

const ScrollButton = () => {
  return (
    <div className={styles.scrolldown}>
      <div className={styles.chevrons}>
        <div className={styles.chevrondown} />
        <div className={styles.chevrondown} />
      </div>
    </div>
  );
};

export { ScrollButton };
