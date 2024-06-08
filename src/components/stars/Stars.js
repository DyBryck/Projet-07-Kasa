import React from "react";
import greyStar from "../../assets/grey-star.png";
import redStar from "../../assets/red-star.png";
import "./Stars.css";

const Stars = ({ rating }) => {
  const fiveStars = Array(5).fill(0);
  return (
    <div>
      {fiveStars.map((star, index) =>
        rating > index ? (
          <img
            className="star star__grey"
            key={star + "-" + index}
            src={redStar}
            alt="Étoile rouge"
          />
        ) : (
          <img
            className="star star__red"
            key={star + "-" + index}
            src={greyStar}
            alt="Étoile grise"
          />
        )
      )}
    </div>
  );
};

export default Stars;
