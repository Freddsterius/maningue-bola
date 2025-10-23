import React from "react";
import "./Inicio.css";
import websiteLogo from "../../assets/images/hero/golden-ball.png";
import { useNavigate } from "react-router-dom";
import Tabela from "../tabela/Tabela";


import goalsData from "../../data/goalsData";
import assistsData from "../../data/assistsData";

import StatTable from "../../components/table/StatTable"


import standings from "../../data/tabelaData";



import PageHeading from "../../components/atoms/pageHeading/PageHeading";

const Inicio = () => {
  const navigate = useNavigate();
  const topFive = standings.slice(0, 5);
  const topThreeGoals = goalsData.slice(0, 5);
  const topThreeAssists = assistsData.slice(0, 5);

  return (
    <div className="inicio">
      <PageHeading headingName="Início" />

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
            color: "aqua",
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
            color: "aqua",
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

      <div className="tabela-table-container-partial">
        <Tabela data={topFive} />
        <button onClick={() => navigate("/tabela")}>Ver Toda Tabela⏩</button>
      </div>

      <div className="tabela-table-container-partial">
        <StatTable data={topThreeGoals} tableCaption="Tabela de Golos" playerCol="Jogadores" playerStat="Golos"/>
        <button onClick={() => navigate("/estatistica#scrollToGoalsTable")}>
          Mais Marcadores⏩
        </button>
      </div>

      <div className="assists-table-container-partial">
        <StatTable data={topThreeAssists} tableCaption="Tabela de Assistências" playerCol="Jogadores" playerStat="Assistências"/> 
        <button onClick={() => navigate("/estatistica#scrollToAssistsTable")}>
          Mais Assistentes⏩
        </button>
      </div>
    </div>
  );
};

export default Inicio;
