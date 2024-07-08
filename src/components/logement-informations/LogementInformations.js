import React from "react";
import Collapse from "../collapse/Collapse";
import Stars from "../stars/Stars";
import Tags from "../tags/Tags";
import "./style.css";

const LogementInformations = ({ logement }) => {
  return (
    <div className="logement-informations-container">
      <div className="logement-informations-container__infos">
        <div className="logement-informations-container__label-and-tags">
          <div className="logement-informations-container__label-and-tags__label">
            <h2 className="logement-informations-container__label-and-tags__label__title">
              {logement.title}
            </h2>
            <p className="logement-informations-container__label-and-tags__label__location">
              {logement.location}
            </p>
          </div>
          <div className="logement-informations-container__label-and-tags__tags">
            <Tags tags={logement.tags} />
          </div>
        </div>
        <div className="logement-informations-container__profile-and-stars">
          <div className="logement-informations-container__profile-and-stars__profile">
            <p className="logement-informations-container__profile-and-stars__profile__name">
              {logement.host.name}
            </p>
            <img
              className="logement-informations-container__profile-and-stars__profile__picture"
              src={logement.host.picture}
              alt={"Photo de profil de " + logement.host.name}
            />
          </div>
          <div className="logement-informations-container__profile-and-stars__stars">
            <Stars rating={logement.rating} />
          </div>
        </div>
      </div>
      <div className="logement-informations-container__collapses">
        <div className="logement-informations-container__collapses__div">
          <Collapse title="Description" content={logement.description} />
        </div>
        <div className="logement-informations-container__collapses__div">
          <Collapse title="Équipements" content={logement.equipments} />
        </div>
      </div>
    </div>
  );
};

export default LogementInformations;
