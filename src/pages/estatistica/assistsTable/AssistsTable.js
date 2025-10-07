import React from "react";
import "./AssistsTable.css";

const AssistsTable = ({ topAssisters = [] }) => {
  const sortTopAssisters = () => {
    return topAssisters.sort((a, b) => {
      if (a.assistsProvided !== b.assistsProvided) {
        return b.assistsProvided - a.assistsProvided;
      }
      return a.playerName.localeCompare(b.playerName);
    });
  };
  const sortedTopAssisters = sortTopAssisters([...topAssisters]);

  return (
    <div className="AssistsTable-container" id="scrollToAssistsTable">
      <h3>Melhores Assistentes:</h3>
      <div className="assists-table-container">
        <table className="assists-table">
          <caption>Tabela dos Jogadores</caption>
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
