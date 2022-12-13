import React from "react";
import { Link } from "react-router-dom";
import "../404/error404.scss";

export default function Error404() {
  return (
    <div className="error">
      <img src="./error404.png" alt="Erreur 404" className="error__img" />
      <div className="error__sentense">
        Oups! La page que vous avez demandé n'existe pas.
      </div>
      <Link to="/" className="error__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
