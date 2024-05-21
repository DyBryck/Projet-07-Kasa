import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo-rouge.png";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Logo Kasa" />
      </Link>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li>
            <NavLink className="header__nav__list__link" to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className="header__nav__list__link" to="/about-us">
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
