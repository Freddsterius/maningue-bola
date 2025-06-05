import React from "react";
import standings from "../../data/tabelaData";
import Tabela from "../tabela/Tabela";

const TabelaFull = () => {
  return (
    <div>
      <Tabela data={standings} />
    </div>
  );
};

export default TabelaFull;
