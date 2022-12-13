import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

export default function Card({ title, cover, id }) {
  return (
    <Link to={`/fiche-logement/${id}`} className="linkCard">
      <article className="card">
        <img className="picFill" src={cover} alt={title} />
        <span className="title">{title}</span>
      </article>
    </Link>
  );
}
