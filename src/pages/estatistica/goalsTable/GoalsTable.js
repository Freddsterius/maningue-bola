import React from "react";
import "./GoalsTable.css";

const topScorers = [
  {
    id: 1,
    playerName: "Archangel",
    teamName: "Angels FC",
    goalsScored: 3,
  },
  {
    id: 2,
    playerName: "Booster Gold",
    teamName: "Dreams FC",
    goalsScored: 8,
  },
  {
    id: 3,
    playerName: "Ghost Rider",
    teamName: "Progress FC",
    goalsScored: 10,
  },
  {
    id: 4,
    playerName: "Human Torch",
    teamName: "Success FC",
    goalsScored: 3,
  },
  {
    id: 5,
    playerName: "Vision",
    teamName: "Freedom FC",
    goalsScored: 10,
  },
  {
    id: 6,
    playerName: "Plastic Man",
    teamName: "Happiness FC",
    goalsScored: 10,
  },
  {
    id: 7,
    playerName: "Martian Manhunter",
    teamName: "Life FC",
    goalsScored: 18,
  },
  {
    id: 8,
    playerName: "Flash",
    teamName: "Wellness FC",
    goalsScored: 22,
  },
  {
    id: 9,
    playerName: "Mr Fantastic",
    teamName: "Genius FC",
    goalsScored: 6,
  },
  {
    id: 10,
    playerName: "Spider-man",
    teamName: "Kindness FC",
    goalsScored: 15,
  },
];
const sortTopScorers = (topScorers) => {
  return topScorers.sort((a, b) => {
    if (a.goalsScored !== b.goalsScored) {
      return b.goalsScored - a.goalsScored;
    }
    return a.playerName.localeCompare(b.playerName);
  });
};
const GoalsTable = () => {
  const sortedTopScorers = sortTopScorers([...topScorers]);
  return (
    <div className="GoalsTable-container">
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
