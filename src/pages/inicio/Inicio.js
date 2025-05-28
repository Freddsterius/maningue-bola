import React from "react";
import "./Inicio.css";
import websiteLogo from "../../assets/images/golden-ball.png";

const Inicio = () => {
  return (
    <div className="inicio">
      <h1>Início</h1>
      <div className="website-logo">
        <img src={websiteLogo} alt="logo de maningnue bola" />
      </div>
      <div className="inicio-txt">
        <p>
          Bem-vindo ao website oficial de
          <span className="maning-bola"> ManingueBola</span> ⚽.
        </p>
        <p>
          Aquí encontrarás notícias, resultados, tabela classificativa e mais da
          LaLiga.
        </p>
      </div>
    </div>
  );
};

export default Inicio;
