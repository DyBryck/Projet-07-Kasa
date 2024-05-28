import React from "react";
import "./style.css";

const Collapse = (props) => {
  const collapseTitle = props.title;
  const collapseContent = props.content;
  return (
    <div className="collapse-container">
      <h3 className="collapse-container__title">{collapseTitle}</h3>
      {Array.isArray(collapseContent) ? (
        <ul>
          {collapseContent.map((content) => (
            <li>{content}</li>
          ))}
        </ul>
      ) : (
        <p className="collapse-container__content">{collapseContent}</p>
      )}
    </div>
  );
};

export default Collapse;
