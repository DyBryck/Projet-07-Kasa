import React from "react";
import logo from "../../assets/logo.png";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Logo Kasa"></img>
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
