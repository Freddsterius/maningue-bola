import React from "react";
import EqCard from "./eqCard/EqCard";
import "./Equipas.css";

const teams = [
  {
    name: "Angels FC",
    getImageSrc: () => require("../../assets/images/golden-ball.png"),
  },
  {
    name: "Dreams FC",
    getImageSrc: () => require("../../assets/images/golden-ball.png"),
  },
  {
    name: "Progress FC",
    getImageSrc: () => require("../../assets/images/golden-ball.png"),
  },
  {
    name: "Success FC",
    getImageSrc: () => require("../../assets/images/golden-ball.png"),
  },
  {
    name: "Freedom FC",
    getImageSrc: () => require("../../assets/images/golden-ball.png"),
  },
  {
    name: "Happiness FC",
    getImageSrc: () => require("../../assets/images/golden-ball.png"),
  },
  {
    name: "Life FC",
    getImageSrc: () => require("../../assets/images/golden-ball.png"),
  },
  {
    name: "Wellness FC",
    getImageSrc: () => require("../../assets/images/golden-ball.png"),
  },
  {
    name: "Genius FC",
    getImageSrc: () => require("../../assets/images/golden-ball.png"),
  },
  {
    name: "Kindness FC",
    getImageSrc: () => require("../../assets/images/golden-ball.png"),
  },
  {
    name: "Love and Fun FC",
    getImageSrc: () => require("../../assets/images/golden-ball.png"),
  },
  {
    name: "Enterteinment FC",
    getImageSrc: () => require("../../assets/images/golden-ball.png"),
  },
];
const orderedTeams = [...teams].sort((a, b) => a.name.localeCompare(b.name));
const Equipas = () => {
  return (
    <div className="equipas-container">
      <div className="equipas-title-container">
        <h1>Equipas Participantes:</h1>
      </div>
      <div className="teams-container">
        {orderedTeams.map((team) => (
          <EqCard
            key={team.name}
            name={team.name}
            imageSrc={team.getImageSrc()}
          />
        ))}
      </div>
    </div>
  );
};

export default Equipas;
