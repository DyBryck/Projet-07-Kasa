import React from "react";
import logements from "../../data/logements.json";
import LogementCard from "../logement-card/LogementCard";

const LogementsList = () => {
  return (
    <div>
      {logements.map((logement) => (
        <LogementCard logement={logement} key={logement.id} />
      ))}
    </div>
  );
};

export default LogementsList;
