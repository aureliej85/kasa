import React from 'react'
import { Link } from 'react-router-dom'
import "./header.scss"

export default function Header(){
    return(
        <nav className="header">
            <Link to="/" className="header__link">
                <img src="../logo-kasa.jpeg" className="logo" />
            </Link>
            <span className="links">
            <Link to="/" className="link">Accueil</Link>
            <Link to="/a-propos" className="link">A propos</Link>
            </span>
        </nav>
    )
}
