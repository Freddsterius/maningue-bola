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
      <div className="assists-table-container">
        <table className="assists-table">
          <caption>Tabela dos Jogadores</caption>
          <thead>
            <tr>
              <th>Posição</th>
              <th>Jogador</th>
              <th>Equipa</th>
              <th>Assistências</th>
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
                  <div className="team-container">
                    <img src={assister.playerImg} alt={assister.alt} />
                    <span>{assister.playerName}</span>
                  </div>
                </td>
                <td>
                  <div className="team-container">
                    <img src={assister.playerImg} alt={assister.alt} />
                    <span>{assister.teamName}</span>
                  </div>
                </td>
                <td>{assister.assistsProvided}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssistsTable;
