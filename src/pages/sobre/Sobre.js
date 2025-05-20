import React from "react";
import "./Sobre.css";

const Sobre = () => {
  return (
    <div className="sobre">
      <h1>Sobre</h1>
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
          <i>LaLiga</i>.
        </a>
      </p>
    </div>
  );
};

export default Sobre;
