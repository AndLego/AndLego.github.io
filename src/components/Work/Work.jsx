import React from "react";

import { Expanding } from "./Expanding/Expanding";
import { projects } from "../../data/projects";
import { FiDownload } from "react-icons/fi";

import { useWindowWidth } from "../../hooks/useWindowWidth";

import "./Work.css";

const postPerLoadMobile = 3;
const postPerLoadElse = 6;

const Work = () => {
  const [next, setNext] = React.useState(3);

  const size = useWindowWidth();
  let currentWidth = size.width;

  React.useEffect(() => {
    currentWidth <= 600 ? setNext(3) : setNext(6);
  }, [currentWidth]);

  const handleMoreProjects = () => {
    currentWidth <= 600
      ? setNext(next + postPerLoadMobile)
      : setNext(next + postPerLoadElse);
  };

  return (
    <>
      <section id="work" className="section-work">
        <div
          className="section-title work-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span>0.3</span>
          <h2>Some Things I've Built</h2>
        </div>

        {currentWidth <= 600 && (
          <>
            {next >= 3 && <Expanding render={projects} start={0} end={3} />}
            {next >= 6 && <Expanding render={projects} start={3} end={6} />}
            {next >= 9 && <Expanding render={projects} start={6} end={9} />}
            {next >= 12 && <Expanding render={projects} start={9} end={12} />}
          </>
        )}

        {currentWidth > 600 && (
          <>
            {next >= 6 && <Expanding render={projects} start={0} end={5} />}
            {next >= 12 && <Expanding render={projects} start={5} end={10} />}
          </>
        )}

        {next < projects.length && (
          <button
            className="work-btn"
            data-aos="fade-up"
            data-aos-duration="1000"
            onClick={handleMoreProjects}
          >
            Load More <FiDownload />
          </button>
        )}

      </section>
    </>
  );
};

export { Work };
