import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo-conatiner">
        <Link to="/" className="footer-logo-link">
          <img
            src={require("../../assets/images/hero/golden-ball.png")}
            alt="logo de maningue bola"
          />
        </Link>
      </div>

      <div className="footer-text-container">
        <p>&copy; 2025 Copyright.</p>
        <p>Todos os direitos reservados.</p>
        <p>
          Desenvolvido por <span className="creator-name">RAIMUNDO.</span>
        </p>
        <p>Morrumbene, Inhambane, Moçambique.</p>
        <p>2025 - </p>
      </div>
    </div>
  );
};

export default Footer;
