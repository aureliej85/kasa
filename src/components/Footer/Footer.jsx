import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

export default function Footer() {
  let textFooter = "© 2020 Kasa. All rights reserved ";
  return (
    <footer className="footer">
      <Link to="/" className="footer__link">
        <img src="../logo-kasa-white.png" alt="Kasa Logo" className="footer__img" />
      </Link>
      <div className="footer__text">{textFooter}</div>
    </footer>
  );
}
