import React from "react";
import logements from "../../data/logements.json";
import LogementCard from "../logement-card/LogementCard";
import "./style.css";

const LogementsList = () => {
  return (
    <div className="logements-list">
      {logements.map((logement) => (
        <LogementCard logement={logement} key={logement.id} />
      ))}
    </div>
  );
};

export default LogementsList;
