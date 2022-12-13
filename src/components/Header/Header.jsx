import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <nav className="header">
      <Link to="/" className="header__link__logo">
        <img src="../logo-kasa.jpeg" alt="Kasa Logo" className="header__link__logo" />
      </Link>
      <span className="header__links">
        <NavLink to="/" className="header__links__link">
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className="header__links__link">
          A propos
        </NavLink>
      </span>
    </nav>
  );
}
