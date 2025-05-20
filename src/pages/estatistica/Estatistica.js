import React, { useState } from "react";
import "./Estatistica.css";
import GoalsTable from "./goalsTable/GoalsTable";
import AssistsTable from "./assistsTable/AssistsTable";

const estatistica = () => {
  return (
    <div className="estatistica">
      <h1>Estatística</h1>

      <GoalsTable />
      <AssistsTable />
    </div>
  );
};

export default estatistica;
