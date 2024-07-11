import React, { useState } from "react";
import "./style.css";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse-container">
      <h3
        className="collapse-container__title"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <div className="collapse-container__arrow-container">
          <img
            className={
              isOpen
                ? "collapse-container__arrow-container__arrow collapse-container__arrow-container__arrow__in"
                : "collapse-container__arrow-container__arrow collapse-container__arrow-container__arrow__out"
            }
            src={require("../../assets/arrow_up.png")}
            alt=""
          />
        </div>
      </h3>
      <div
        className={
          isOpen
            ? "collapse-container__content is-open"
            : "collapse-container__content"
        }
      >
        <div
          className={`collapse-container__content__text ${
            isOpen ? "collapse-container__content__open" : ""
          }`}
        >
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
