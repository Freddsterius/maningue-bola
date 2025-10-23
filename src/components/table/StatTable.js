import React from "react";
import "./StatTable.css";

const StatTable = ({ data = [],tableCaption ,playerCol, playerStat }) => {
  const sortData = () => {
    return data.sort((a, b) => {
      if (a.statNumber !== b.statNumber) {
        return b.statNumber - a.statNumber;
      }
      return a.playerName.localeCompare(b.playerName);
    });
  };
  const sorteddata = sortData([...data]);

  return (
    <div className="StatTable-container" id="scrollToStatTable">
      <div className="assists-table-container">
        <table className="assists-table">
          <caption>{tableCaption}</caption>

          <thead>
            <tr>
              <th>{playerCol}</th>
              <th>{playerStat}</th>
            </tr>
          </thead>

          <tbody>
            {sorteddata.map((player, index) => (
              <tr
                key={player.id}
                className={index < 1 ? "highlightBestplayer" : ""}
              >
                <td>
                  <div className="as-player-container">
                    <div className="poseition-number-container">
                      <p>{index + 1}</p>
                    </div>

                    <div className="as-player-img-container">
                      <img src={player.playerImg} alt={player.alt} />
                    </div>

                    <div className="as-team-container">
                      <p className="player-name">{player.playerName}</p>

                      <div className="as-name-container">
                        <img src={player.playerImg} alt={player.alt} />
                        <p>{player.teamName}</p>
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="assist-number">
                    <p>{player.statNumber}</p>
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
