import React from "react";
import "./Sobre.css";
import placeholderImg from "../../assets/images/hero/golden-ball.png";
import PageHeading from "../../components/atoms/pageHeading/PageHeading";

const Sobre = () => {
  return (
    <div className="sobre-container">
      <PageHeading headingName="Sobre" />

      <div className="sobre-container-text">
        <p>
          <span className="maning-bola">ManingueBola</span>, é um website amador
          criado por um estudante de "Desenvolvimento de Websites".
        </p>

        <p>
          O objectivo principal do website é abordar assuntos relacionados ao
          campeonato espanhol, mais conhecido como{" "}
          <a
            href="https://www.laliga.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>LaLiga</em>.
          </a>
        </p>
      </div>

      <div className="img-container">
        <img src={placeholderImg} alt="logotipo de maningue bola" />
      </div>
    </div>
  );
};

export default Sobre;
