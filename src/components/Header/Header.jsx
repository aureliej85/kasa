import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./header.scss"

export default function Header(){
    return(
        <nav className="header">
            <Link to="/" className="header__link">
                <img src="../logo-kasa.jpeg" className="logo" />
            </Link>
            <span className="links">
            <NavLink to="/" className="link">Accueil</NavLink>
            <NavLink to="/a-propos" className="link">A propos</NavLink>
            </span>
        </nav>
    )
}
