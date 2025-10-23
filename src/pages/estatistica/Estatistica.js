import React from "react";
import "./Estatistica.css";


import topScorers from "../../data/goalsData";
import topAssisters from "../../data/assistsData";

import PageHeading from "../../components/atoms/pageHeading/PageHeading";
import StatTable from "../../components/table/StatTable"

const estatistica = () => {
  return (
    <div className="estatistica">
      <PageHeading headingName="Estatísticas" />


      

      <StatTable data={topScorers} tableCaption="Tabela de Golos" playerCol="Jogadores" playerStat="Golos"/>

      <StatTable data={topAssisters} tableCaption="Tabela de Assistências" playerCol="Jogadores" playerStat="Assistências"/>
    </div>
  );
};

export default estatistica;
