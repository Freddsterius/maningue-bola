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
      <h4
        style={{
          color: "rgb(255, 0, 0)",
          marginBlock: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "10x",
          width: "80vw",
          borderRadius: "5px",
          border: "1px solid white",
          backgroundColor: "black",
        }}
      >
        Content Coming soon ...
        <br />
        ⬇⬇⬇⬇
      </h4>
      <div>
        <fieldset
          style={{
            color: "rgb(17, 216, 43)",
            marginBlock: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20px",
            width: "80vw",
          }}
        >
          <ul>
            <li>Proximos Jogos</li>
            <li>Proximos Jogos</li>
            <li>Proximos Jogos</li>
          </ul>
          <button>Mais⏩</button>
        </fieldset>
      </div>
      <div>
        <fieldset
          style={{
            color: "rgb(17, 216, 43)",
            marginBlock: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20px",
            width: "80vw",
          }}
        >
          <ul>
            <li>Noticias Recentes</li>
            <li>Noticias Recentes</li>
            <li>Noticias Recentes</li>
          </ul>
          <button>Mais⏩</button>
        </fieldset>
      </div>
      <div>
        <fieldset
          style={{
            color: "rgb(17, 216, 43)",
            marginBlock: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20px",
            width: "80vw",
          }}
        >
          <ol>
            <li>Tabela Classificativa</li>
            <li>Tabela Classificativa</li>
            <li>Tabela Classificativa</li>
          </ol>
          <button>Mais⏩</button>
        </fieldset>
      </div>
      <div>
        <fieldset
          style={{
            color: "rgb(17, 216, 43)",
            marginBlock: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20px",
            width: "80vw",
          }}
        >
          <ol>
            <li>Melhores Assistentes</li>
            <li>Melhores Marcadores</li>
            <li>Melhores Marcadores</li>
          </ol>
          <button>Mais⏩</button>
        </fieldset>
      </div>
      <div>
        <fieldset
          style={{
            color: "rgb(17, 216, 43)",
            marginTop: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20px",
            width: "80vw",
          }}
        >
          <ol>
            <li>Melhores Marcadores</li>
            <li>Melhores Marcadores</li>
            <li>Melhores Marcadores</li>
          </ol>
          <button>Mais⏩</button>
        </fieldset>
      </div>
    </div>
  );
};

export default Inicio;
