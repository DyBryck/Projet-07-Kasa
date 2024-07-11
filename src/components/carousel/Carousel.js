import React, { useState } from "react";
import arrow_left from "../../assets/arrow_left.png";
import arrow_right from "../../assets/arrow_right.png";

const Carousel = ({ activeLogement }) => {
  const [pictureIndex, setPictureIndex] = useState(0);

  const nextPicture = () => {
    let newIndex = pictureIndex + 1;
    if (newIndex > activeLogement.pictures.length - 1) {
      newIndex = 0;
    }
    setPictureIndex(newIndex);
  };

  const previousPicture = () => {
    let newIndex = pictureIndex - 1;
    if (newIndex < 0) {
      newIndex = activeLogement.pictures.length - 1;
    }
    setPictureIndex(newIndex);
  };

  return (
    <div className="carousel">
      <img
        className="carousel__image"
        src={activeLogement.pictures[pictureIndex]}
        alt={activeLogement.title}
      />
      {activeLogement.pictures.length > 1 && (
        <>
          <img
            className="carousel__arrow carousel__arrow__left"
            src={arrow_left}
            onClick={previousPicture}
            alt="Afficher l'aperçu du logement précédent"
          />
          <img
            className="carousel__arrow carousel__arrow__right"
            src={arrow_right}
            onClick={nextPicture}
            alt="Afficher l'aperçu du logement suivant"
          />
          <p className="carousel__picture-counter">
            {pictureIndex + 1}/{activeLogement.pictures.length}
          </p>
        </>
      )}
    </div>
  );
};

export default Carousel;
