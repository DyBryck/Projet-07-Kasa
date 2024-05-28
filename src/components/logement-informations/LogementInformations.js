import React from "react";
import Collapse from "../collapse/Collapse";
import Tags from "../tags/Tags";
import "./style.css";

const LogementInformations = (props) => {
  const { logement } = props;
  return (
    <div className="logement-informations-container">
      <div className="logement-informations-container__host-details">
        <div className="logement-informations-container__caption">
          <h2 className="logement-informations-container__caption__title">
            {logement.title}
          </h2>
          <p className="logement-informations-container__caption__location">
            {logement.location}
          </p>
        </div>
        <div className="logement-informations-container__profile-container">
          <p className="logement-informations-container__profile-container__name">
            {logement.host.name}
          </p>
          <img
            className="logement-informations-container__profile-container__picture"
            src={logement.host.picture}
            alt={"Photo de profil de " + logement.host.name}
          />
        </div>
      </div>
      <div className="logement-informations-container__tags-and-stars">
        <Tags tags={logement.tags} />
      </div>
      <div className="logement-informations-container__collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipements} />
      </div>
    </div>
  );
};

export default LogementInformations;
