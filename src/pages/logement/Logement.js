import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logements from "../../data/logements.json";

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
    <div>Loading...</div>
  ) : (
    <div>
      <div>{activeLogement.title}</div>
    </div>
  );
};

export default Logement;
