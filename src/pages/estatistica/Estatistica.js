import React from "react";
import "./Estatistica.css";
import GoalsTable from "./goalsTable/GoalsTable";
import AssistsTable from "./assistsTable/AssistsTable";

import topScorers from "../../data/goalsData";
import topAssisters from "../../data/assistsData";

const estatistica = () => {
  return (
    <div className="estatistica">
      <h1>Estatística</h1>

      <GoalsTable topScorers={topScorers} />
      <AssistsTable topAssisters={topAssisters} />
    </div>
  );
};

export default estatistica;
