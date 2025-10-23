import React from "react";
import "./StatTable.css";

const StatTable = ({ topAssisters = [] }) => {
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
    <div className="StatTable-container" id="scrollToStatTable">
      <div className="assists-table-container">
        <table className="assists-table">
          <caption>Tabela das Assistências</caption>

          <thead>
            <tr>
              <th>Jogador</th>
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
                  <div className="as-player-container">
                    <div className="poseition-number-container">
                      <p>{index + 1}</p>
                    </div>

                    <div className="as-player-img-container">
                      <img src={assister.playerImg} alt={assister.alt} />
                    </div>

                    <div className="as-team-container">
                      <p>{assister.playerName}</p>

                      <div className="as-name-container">
                        <img src={assister.playerImg} alt={assister.alt} />
                        <p>{assister.teamName}</p>
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="assist-number">
                    <p>{assister.assistsProvided}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatTable;
