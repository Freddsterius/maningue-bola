import React from "react";
import "./Estatistica.css";
import GoalsTable from "./goalsTable/GoalsTable";
import AssistsTable from "./assistsTable/AssistsTable";

import topScorers from "../../data/goalsData";
import topAssisters from "../../data/assistsData";

import PageHeading from "../../components/atoms/pageHeading/PageHeading";

const estatistica = () => {
  return (
    <div className="estatistica">
      <PageHeading headingName="Estatísticas" />

      <GoalsTable topScorers={topScorers} />
      <AssistsTable topAssisters={topAssisters} />
    </div>
  );
};

export default estatistica;
