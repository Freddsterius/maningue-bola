import React from "react";
import "./Jogadores.css";
import playerImg from "../../assets/images/mozambique-flag.jpg";

const players = [
  { id: 1, name: "Steven Strange", position: "Atacante", team: "Dreams FC" },
  {
    id: 2,
    name: "Steve Rogers",
    position: "Meio-campista",
    team: "Success FC",
  },
  {
    id: 3,
    name: "Clint Burton",
    position: "Guarda-redes",
    team: "Happiness FC",
  },
  { id: 4, name: "Bruce Banners", position: "Defesa", team: "Angels FC" },
  {
    id: 5,
    name: "Billy Batson",
    position: "Meio-campista",
    team: "Freedom FC",
  },
  { id: 6, name: "John Constantine", position: "Defesa", team: "Life FC" },
  { id: 7, name: "Victor Stone", position: "Defesa", team: "Wellness FC" },
  { id: 8, name: "Bruce Wayne", position: "Atacante", team: "Progress FC" },
  { id: 9, name: "Tony Stark", position: "Defesa", team: "Genius FC" },
  { id: 10, name: "Clark Kent", position: "Atacante", team: "Kindness FC" },
  {
    id: 11,
    name: "Barry Allen",
    position: "Meio-campista",
    team: "Love And Fun FC",
  },
  {
    id: 12,
    name: "Peter Parker",
    position: "Guarda-redes",
    team: "Enterteinment FC",
  },
];
const sortedPlayers = [...players].sort((a, b) => a.name.localeCompare(b.name));
const Jogadores = () => {
  return (
    <div className="jogadores-container">
      <h1>Jogadores</h1>
      <div className="jogadores-table-container">
        <table className="jogadores-table">
          <thead>
            <tr>
              <th>Foto</th>
              <th>Jogador</th>
              <th>Posição</th>
              <th>Equipa</th>
            </tr>
          </thead>
          <tbody>
            {sortedPlayers.map((player) => (
              <tr key={player.id}>
                <td>
                  <img src={playerImg} alt="corresponding player" />
                </td>
                <td>
                  <b>{player.name}</b>
                </td>
                <td>{player.position}</td>
                <td>{player.team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Jogadores;
