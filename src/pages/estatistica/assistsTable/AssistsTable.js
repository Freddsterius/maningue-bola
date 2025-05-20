import React from "react";
import "./AssistsTable.css";

const topAssisters = [
  {
    id: 1,
    playerName: "Will Smith",
    teamName: "Angels FC",
    assistsProvided: 3,
  },
  {
    id: 2,
    playerName: "Jackie Chan",
    teamName: "Dreams FC",
    assistsProvided: 8,
  },
  {
    id: 3,
    playerName: "Martin Lawrence",
    teamName: "Progress FC",
    assistsProvided: 10,
  },
  {
    id: 4,
    playerName: "Dwayne 'The Rock' Johnson",
    teamName: "Success FC",
    assistsProvided: 3,
  },
  {
    id: 5,
    playerName: "Kevin Hart",
    teamName: "Freedom FC",
    assistsProvided: 4,
  },
  {
    id: 6,
    playerName: "Ray Raynolds",
    teamName: "Happiness FC",
    assistsProvided: 5,
  },
  {
    id: 7,
    playerName: "Chris Evans",
    teamName: "Life FC",
    assistsProvided: 8,
  },
  {
    id: 8,
    playerName: "Denzel Washington",
    teamName: "Wellness FC",
    assistsProvided: 2,
  },
  {
    id: 9,
    playerName: "John Cena",
    teamName: "Genius FC",
    assistsProvided: 6,
  },
  {
    id: 10,
    playerName: "Shemar Moore",
    teamName: "Kindness FC",
    assistsProvided: 5,
  },
];

const sortTopAssisters = (topAssisters) => {
  return topAssisters.sort((a, b) => {
    if (a.assistsProvided !== b.assistsProvided) {
      return b.assistsProvided - a.assistsProvided;
    }
    return a.playerName.localeCompare(b.playerName);
  });
};
const AssistsTable = () => {
  const sortedTopAssisters = sortTopAssisters([...topAssisters]);
  return (
    <div className="AssistsTable-container">
      <h3>Melhores Assistentes:</h3>
      <div className="assists-table-container">
        <table className="assists-table">
          <thead>
            <tr>
              <th>Posição</th>
              <th>Nome do Jogador</th>
              <th>Equipa</th>
              <th>Assistências Dadas</th>
            </tr>
          </thead>
          <tbody>
            {sortedTopAssisters.map((assister, index) => (
              <tr
                key={assister.id}
                className={index < 1 ? "highlightBestAssister" : ""}
              >
                <td>
                  <b>{index + 1}</b>
                </td>
                <td>
                  <b>{assister.playerName}</b>
                </td>
                <td>
                  <b>{assister.teamName}</b>
                </td>
                <td>
                  <b>{assister.assistsProvided}</b>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssistsTable;
