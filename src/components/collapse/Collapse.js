import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const innerContentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(innerContentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const toggleCollapse = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="collapse-container">
      <h3 className="collapse-container__title" onClick={toggleCollapse}>
        {title}
        <div className="collapse-container__arrow-container">
          <img
            className={
              isOpen
                ? "collapse-container__arrow-container__arrow collapse-container__arrow-container__arrow__out"
                : "collapse-container__arrow-container__arrow collapse-container__arrow-container__arrow__in"
            }
            src={require("../../assets/arrow_up.png")}
            alt=""
          />
        </div>
      </h3>
      <div
        className="collapse-container__content-wrapper"
        style={{ height: `${height}px` }}
      >
        <div className="collapse-container__content" ref={innerContentRef}>
          {Array.isArray(content) ? (
            <ul>
              {content.map((content, i) => (
                <li key={content + "-" + i}>{content}</li>
              ))}
            </ul>
          ) : (
            <div>{content}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
