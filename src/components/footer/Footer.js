import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img
          src={require("../../assets/images/golden-ball.png")}
          alt="logo de maningue bola"
        />
      </div>
      <div className="footer-txt">
        <p>
          &copy; 2025 Copyright.
          <br />
          Todos os direitos reservados.
          <br />
          Desenvolvido por{" "}
          <span className="creator-name">FAUSTINO RAIMUNDO</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
