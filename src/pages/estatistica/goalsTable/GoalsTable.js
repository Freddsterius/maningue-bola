import React from "react";
import "./GoalsTable.css";

const GoalsTable = ({ topScorers }) => {
  const sortTopScorers = () => {
    return topScorers.sort((a, b) => {
      if (a.goalsScored !== b.goalsScored) {
        return b.goalsScored - a.goalsScored;
      }
      return a.playerName.localeCompare(b.playerName);
    });
  };
  const sortedTopScorers = sortTopScorers([...topScorers]);

  return (
    <div className="GoalsTable-container" id="scrollToGoalsTable">
      <h3>Melhores Marcadores:</h3>

      <div className="goals-table-container">
        <table className="goals-table">
          <thead>
            <tr>
              <th>Posição</th>
              <th>Nome do Jogador</th>
              <th>Equipa</th>
              <th>Golos Marcados</th>
            </tr>
          </thead>
          <tbody>
            {sortedTopScorers.map((scorer, index) => (
              <tr
                key={scorer.id}
                className={index < 1 ? "highlightBestScorer" : ""}
              >
                <td>
                  <b>{index + 1}</b>
                </td>
                <td>
                  <b>{scorer.playerName}</b>
                </td>
                <td>
                  <b>{scorer.teamName}</b>
                </td>
                <td>
                  <b>{scorer.goalsScored}</b>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GoalsTable;
