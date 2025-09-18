import React from "react";
import "./Tabela.css";
import PageHeading from "../../components/atoms/pageHeading/PageHeading";

//import data from "../../data/tabelaData";
/*const goalsdata = [
  {
    id: "afc",
    name: "Angels FC",
    matchesPlayed: 10,
    wins: 8,
    draws: 1,
    losses: 1,
    goalsScored: 15,
    goalsConceded: 5,
    goalDifference: 10,
    points: 25,
  },
  {
    id: "dfc",
    name: "Dreams FC",
    matchesPlayed: 10,
    wins: 5,
    draws: 3,
    losses: 2,
    goalsScored: 9,
    goalsConceded: 4,
    goalDifference: 5,
    points: 18,
  },
  {
    id: "pfc",
    name: "Progress FC",
    matchesPlayed: 10,
    wins: 2,
    draws: 7,
    losses: 1,
    goalsScored: 7,
    goalsConceded: 2,
    goalDifference: 5,
    points: 13,
  },
  {
    id: "sfc",
    name: "Success FC",
    matchesPlayed: 10,
    wins: 10,
    draws: 0,
    losses: 0,
    goalsScored: 24,
    goalsConceded: 3,
    goalDifference: 21,
    points: 30,
  },
  {
    id: "ffc",
    name: "Freedom FC",
    matchesPlayed: 10,
    wins: 7,
    draws: 1,
    losses: 2,
    goalsScored: 11,
    goalsConceded: 2,
    goalDifference: 9,
    points: 22,
  },
  {
    id: "hfc",
    name: "Happiness FC",
    matchesPlayed: 10,
    wins: 8,
    draws: 1,
    losses: 1,
    goalsScored: 20,
    goalsConceded: 8,
    goalDifference: 12,
    points: 25,
  },
  {
    id: "lfc",
    name: "Life FC",
    matchesPlayed: 10,
    wins: 6,
    draws: 1,
    losses: 3,
    goalsScored: 14,
    goalsConceded: 5,
    goalDifference: 9,
    points: 19,
  },
  {
    id: "wfc",
    name: "Wellness FC",
    matchesPlayed: 10,
    wins: 4,
    draws: 3,
    losses: 3,
    goalsScored: 12,
    goalsConceded: 6,
    goalDifference: 6,
    points: 15,
  },
  {
    id: "gfc",
    name: "Genius FC",
    matchesPlayed: 10,
    wins: 3,
    draws: 2,
    losses: 5,
    goalsScored: 11,
    goalsConceded: 11,
    goalDifference: 0,
    points: 8,
  },
  {
    id: "kfc",
    name: "Kindness FC",
    matchesPlayed: 10,
    wins: 1,
    draws: 5,
    losses: 4,
    goalsScored: 7,
    goalsConceded: 7,
    goalDifference: 0,
    points: 8,
  },
  {
    id: "lffc",
    name: "Love and Fun FC",
    matchesPlayed: 10,
    wins: 0,
    draws: 2,
    losses: 8,
    goalsScored: 3,
    goalsConceded: 16,
    goalDifference: -13,
    points: 2,
  },
  {
    id: "efc",
    name: "Enterteinment FC",
    matchesPlayed: 10,
    wins: 0,
    draws: 0,
    losses: 10,
    goalsScored: 1,
    goalsConceded: 16,
    goalDifference: -23,
    points: 0,
  },
];
*/

/*
const sortTeams = (teams) => {
  return teams.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    if (b.goalDifference !== a.goalDifference) {
      return b.goalDifference - a.goalDifference;
    }
    return b.goalsScored - a.goalsScored;
  });
};
*/
const Tabela = ({ data = [] }) => {
  //const [teams, setTeams] = useState(goalsdata);

  const sortTeams = (data) => {
    return data.sort((a, b) => {
      if (b.points !== a.points) {
        return b.points - a.points;
      }
      if (b.goalDifference !== a.goalDifference) {
        return b.goalDifference - a.goalDifference;
      }
      return b.goalsScored - a.goalsScored;
    });
  };

  const sortedTeams = sortTeams([...data]);

  return (
    <div className="tabela-container">
      <PageHeading headingName="Tabela" />

      <div className="tabela-table-container">
        <table className="tabela-table">
          <thead>
            <tr>
              <th>Posição</th>
              <th>Equipa</th>
              <th>Pontos</th>
              <th>Jogos Jogados</th>
              <th>Jogos Ganhos</th>
              <th>Jogos Empatados</th>
              <th>Jogos Perdidos</th>
              <th>Golos Marcados</th>
              <th>Golos Marcados</th>
              <th>Diferença de Golos</th>
            </tr>
          </thead>
          <tbody>
            {sortedTeams.map((team, index) => (
              <tr
                key={team.id}
                className={index < 4 ? "highlightTop4" : "maintenence"}
              >
                <td>{index + 1}</td>
                <td>
                  <b>{team.name}</b>
                </td>
                <td>
                  <b>{team.points}</b>
                </td>
                <td>{team.matchesPlayed}</td>
                <td>{team.wins}</td>
                <td>{team.draws}</td>
                <td>{team.losses}</td>
                <td>{team.goalsScored}</td>
                <td>{team.goalsConceded}</td>
                <td>{team.goalDifference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabela;
