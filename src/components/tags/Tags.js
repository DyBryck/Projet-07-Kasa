import React from "react";
import "./style.css";

const Tags = ({ tags }) => {
  return (
    <div className="tags-container">
      {tags.map((tag, i) => (
        <div key={tag + "-" + i} className="tags-container__item">
          {tag}
        </div>
      ))}
    </div>
  );
};
export default Tags;
