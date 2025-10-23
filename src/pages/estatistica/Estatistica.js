import React from "react";
import "./Estatistica.css";
import GoalsTable from "./goalsTable/GoalsTable";


import topScorers from "../../data/goalsData";
import topAssisters from "../../data/assistsData";

import PageHeading from "../../components/atoms/pageHeading/PageHeading";
import StatTable from "../../components/table/StatTable"

const estatistica = () => {
  return (
    <div className="estatistica">
      <PageHeading headingName="Estatísticas" />

      <GoalsTable topScorers={topScorers} />


      <StatTable topAssisters={topAssisters}/>
    </div>
  );
};

export default estatistica;
