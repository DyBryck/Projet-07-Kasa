import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Error404 = () => {
  return (
    <div className="error-container">
      <h1 className="error-container__title">404</h1>
      <h2 className="error-container__caption">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link className="error-container__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default Error404;
