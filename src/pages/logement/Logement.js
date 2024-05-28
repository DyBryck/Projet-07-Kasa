import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import arrow_left from "../../assets/arrow_left.png";
import arrow_right from "../../assets/arrow_right.png";
import LogementInformations from "../../components/logement-informations/LogementInformations";
import logements from "../../data/logements.json";
import "./style.css";

const Logement = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeLogement, setActiveLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pictureIndex, setPictureIndex] = useState(0);
  useEffect(() => {
    const index = logements.findIndex((logement) => logement.id === id);
    if (index < 0) {
      return navigate("/error-404");
    }
    setActiveLogement(logements[index]);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id, navigate]);
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
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div className="carousel">
        <img
          className="carousel__image"
          src={activeLogement.pictures[pictureIndex]}
          alt={activeLogement.title}
        />
        <img
          className="carousel__arrow carousel__arrow__left"
          src={arrow_left}
          onClick={previousPicture}
          alt="Flèche de navigation retour"
        />
        <img
          className="carousel__arrow carousel__arrow__right"
          src={arrow_right}
          onClick={nextPicture}
          alt="Flèche de navigation suivante"
        />
        <p className="carousel__picture-counter">
          {pictureIndex + 1}/{activeLogement.pictures.length}
        </p>
      </div>
      <LogementInformations logement={activeLogement} />
    </div>
  );
};

export default Logement;
