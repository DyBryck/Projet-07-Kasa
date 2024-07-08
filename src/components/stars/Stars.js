import React from "react";
import greyStar from "../../assets/grey-star.png";
import redStar from "../../assets/red-star.png";
import "./Stars.css";

const Stars = ({ rating }) => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <img
          className={`star ${rating > index ? "star__red" : "star__grey"}`}
          key={index}
          src={rating > index ? redStar : greyStar}
          alt={rating > index ? "Étoile rouge" : "Étoile grise"}
        />
      ))}
    </div>
  );
};

export default Stars;
