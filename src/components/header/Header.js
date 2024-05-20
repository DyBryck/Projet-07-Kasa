import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-rouge.png";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo Kasa" />
      <nav className="header__nav">
        <ul className="header__nav__list">
          <Link className="header__nav__list__link" to="/">
            Accueil
          </Link>
          <Link className="header__nav__list__link" to="/about-us">
            À propos
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
