import React from "react";
import "./Jogadores.css";
import PageHeading from "../../components/atoms/pageHeading/PageHeading";

const players = [
  {
    id: 1,
    name: "Steven Strange",
    position: "Atacante",
    team: "Dreams FC",
    playerImg: require("../../assets/images/players/grad1.jpg"),
    alt: "coresponding player",
  },
  {
    id: 2,
    name: "Steve Rogers",
    position: "Meio-campista",
    team: "Success FC",
    playerImg: require("../../assets/images/players/grad2.jpg"),
    alt: "coresponding player",
  },
  {
    id: 3,
    name: "Clint Burton",
    position: "Guarda-redes",
    team: "Happiness FC",
    playerImg: require("../../assets/images/players/grad3.jpg"),
    alt: "coresponding player",
  },
  {
    id: 4,
    name: "Bruce Banners",
    position: "Defesa",
    team: "Angels FC",
    playerImg: require("../../assets/images/players/grad4.jpg"),
    alt: "coresponding player",
  },
  {
    id: 5,
    name: "Billy Batson",
    position: "Meio-campista",
    team: "Freedom FC",
    playerImg: require("../../assets/images/players/grad5.jpg"),
    alt: "coresponding player",
  },
  {
    id: 6,
    name: "John Constantine",
    position: "Defesa",
    team: "Life FC",
    playerImg: require("../../assets/images/players/grad6.jpg"),
    alt: "coresponding player",
  },
  {
    id: 7,
    name: "Victor Stone",
    position: "Defesa",
    team: "Wellness FC",
    playerImg: require("../../assets/images/players/tex1.jpg"),
    alt: "coresponding player",
  },
  {
    id: 8,
    name: "Bruce Wayne",
    position: "Atacante",
    team: "Progress FC",
    playerImg: require("../../assets/images/players/tex2.jpg"),
    alt: "coresponding player",
  },
  {
    id: 9,
    name: "Tony Stark",
    position: "Defesa",
    team: "Genius FC",
    playerImg: require("../../assets/images/players/tex3.jpg"),
    alt: "coresponding player",
  },
  {
    id: 10,
    name: "Clark Kent",
    position: "Atacante",
    team: "Kindness FC",
    playerImg: require("../../assets/images/players/tex4.jpg"),
    alt: "coresponding player",
  },
  {
    id: 11,
    name: "Barry Allen",
    position: "Meio-campista",
    team: "Love And Fun FC",
    playerImg: require("../../assets/images/players/tex5.jpg"),
    alt: "coresponding player",
  },
  {
    id: 12,
    name: "Peter Parker",
    position: "Guarda-redes",
    team: "Enterteinment FC",
    playerImg: require("../../assets/images/players/tex6.jpg"),
    alt: "coresponding player",
  },
  {
    id: 13,
    name: "Steven Strange",
    position: "Atacante",
    team: "Dreams FC",
    playerImg: require("../../assets/images/players/grad1.jpg"),
    alt: "coresponding player",
  },
  {
    id: 14,
    name: "Steve Rogers",
    position: "Meio-campista",
    team: "Success FC",
    playerImg: require("../../assets/images/players/grad2.jpg"),
    alt: "coresponding player",
  },
  {
    id: 15,
    name: "Clint Burton",
    position: "Guarda-redes",
    team: "Happiness FC",
    playerImg: require("../../assets/images/players/grad3.jpg"),
    alt: "coresponding player",
  },
  {
    id: 16,
    name: "Bruce Banners",
    position: "Defesa",
    team: "Angels FC",
    playerImg: require("../../assets/images/players/grad4.jpg"),
    alt: "coresponding player",
  },
  {
    id: 17,
    name: "Billy Batson",
    position: "Meio-campista",
    team: "Freedom FC",
    playerImg: require("../../assets/images/players/grad5.jpg"),
    alt: "coresponding player",
  },
  {
    id: 18,
    name: "John Constantine",
    position: "Defesa",
    team: "Life FC",
    playerImg: require("../../assets/images/players/grad6.jpg"),
    alt: "coresponding player",
  },
  {
    id: 19,
    name: "Victor Stone",
    position: "Defesa",
    team: "Wellness FC",
    playerImg: require("../../assets/images/players/tex1.jpg"),
    alt: "coresponding player",
  },
  {
    id: 20,
    name: "Bruce Wayne",
    position: "Atacante",
    team: "Progress FC",
    playerImg: require("../../assets/images/players/tex2.jpg"),
    alt: "coresponding player",
  },
  {
    id: 21,
    name: "Tony Stark",
    position: "Defesa",
    team: "Genius FC",
    playerImg: require("../../assets/images/players/tex3.jpg"),
    alt: "coresponding player",
  },
  {
    id: 22,
    name: "Clark Kent",
    position: "Atacante",
    team: "Kindness FC",
    playerImg: require("../../assets/images/players/tex4.jpg"),
    alt: "coresponding player",
  },
  {
    id: 23,
    name: "Barry Allen",
    position: "Meio-campista",
    team: "Love And Fun FC",
    playerImg: require("../../assets/images/players/tex5.jpg"),
    alt: "coresponding player",
  },
  {
    id: 24,
    name: "Peter Parker",
    position: "Guarda-redes",
    team: "Enterteinment FC",
    playerImg: require("../../assets/images/players/tex6.jpg"),
    alt: "coresponding player",
  },
];
const sortedPlayers = [...players].sort((a, b) => a.name.localeCompare(b.name));
const Jogadores = () => {
  return (
    <div className="jogadores-container">
      <PageHeading headingName="Jogadores" />

      <div className="jogadores-table-container">
        <table className="jogadores-table">
          <caption>Tabela dos Jogadores</caption>
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
                <td className="image-container">
                  <img src={player.playerImg} alt={player.alt} />
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
