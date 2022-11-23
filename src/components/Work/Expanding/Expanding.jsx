import React from "react";
import { FiGithub, FiExternalLink, FiDownload } from "react-icons/fi";

const Expanding = ({ render, start, end }) => {
  const [active, setActive] = React.useState(0);
  const handleActive = (id) => {
    setActive(id);
  };

  return (
    <>
      <div
        className="testContainer work-content"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {render?.slice(start, end)?.map((item, index) => {
          return (
            <div
              key={index}
              className={`work-panel ${active === item.id ? "active" : ""}`}
              onClick={() => handleActive(item.id)}
            >
              <h3>
                <a target="_blank" href={item.live}>
                  {item.name}
                </a>
              </h3>
              <div className="panel-btns">
                <a target="_blank" href={item.repository}>
                  <FiGithub />
                  <span>repo</span>
                </a>
                <a target="_blank" href={item.live}>
                  <FiExternalLink />
                  <span>live</span>
                </a>
              </div>
              <p>{item.description}</p>
              <div
                className="panel-image"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Expanding };
