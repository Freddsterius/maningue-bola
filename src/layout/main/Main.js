import React from "react";
import { Routes, Route } from "react-router-dom";

import Inicio from "../../pages/inicio/Inicio";
import Noticias from "../../pages/noticias/Noticias";
import Jogos from "../../pages/jogos/Jogos";
import TabelaFull from "../../pages/tabelaFull/TabelaFull";
import Estatistica from "../../pages/estatistica/Estatistica";
import Jogadores from "../../pages/jogadores/Jogadores";
import Equipas from "../../pages/equipas/Equipas";
import Inscricao from "../../pages/Inscricao/Inscricao";
import Sobre from "../../pages/sobre/Sobre";

import GoalsTable from "../../pages/estatistica/goalsTable/GoalsTable";
import AssistsTable from "../../pages/estatistica/assistsTable/AssistsTable";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/tabela" element={<TabelaFull />} />
        <Route path="/estatistica" element={<Estatistica />} />
        <Route path="/jogadores" element={<Jogadores />} />
        <Route path="/equipas" element={<Equipas />} />
        <Route path="/inscricao" element={<Inscricao />} />
        <Route path="/sobre" element={<Sobre />} />

        <Route path="/tabela-golos" element={<GoalsTable />} />
        <Route path="/tabela-assistencias" element={<AssistsTable />} />
      </Routes>
    </div>
  );
};

export default Main;
