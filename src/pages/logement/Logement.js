import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import LogementInformations from "../../components/logement-informations/LogementInformations";
import logements from "../../data/logements.json";
import "./style.css";

const Logement = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeLogement, setActiveLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const index = logements.findIndex((logement) => logement.id === id);
    if (index < 0) {
      return navigate("/error-404");
    }
    setActiveLogement(logements[index]);
    setLoading(false);
  }, [id, navigate]);

  return loading ? (
    <div className="loader-container">
      <span className="loader"></span>
    </div>
  ) : (
    <div>
      <Carousel activeLogement={activeLogement} />
      <LogementInformations logement={activeLogement} />
    </div>
  );
};

export default Logement;
