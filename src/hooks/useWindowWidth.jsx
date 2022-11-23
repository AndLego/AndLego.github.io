import React from "react";

const useWindowWidth = () => {
  const [windowWith, setWindowWidth] = React.useState({ width: undefined });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowWidth({ width: window.innerWidth });
      }
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowWith;
};

export { useWindowWidth };
