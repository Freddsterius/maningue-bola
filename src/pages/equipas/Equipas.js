import React from "react";
import EqCard from "../../components/cards/eqCard/EqCard";
import "./Equipas.css";
import teamImg from "../../assets/images/teams/bruschetta-50.webp";
import PageHeading from "../../components/atoms/pageHeading/PageHeading";

const teams = [
  {
    name: "Angels FC",
    image: teamImg,
  },
  {
    name: "Dreams FC",
    image: teamImg,
  },
  {
    name: "Progress FC",
    image: teamImg,
  },
  {
    name: "Success FC",
    image: teamImg,
  },
  {
    name: "Freedom FC",
    image: teamImg,
  },
  {
    name: "Happiness FC",
    image: teamImg,
  },
  {
    name: "Life FC",
    image: teamImg,
  },
  {
    name: "Wellness FC",
    image: teamImg,
  },
  {
    name: "Genius FC",
    image: teamImg,
  },
  {
    name: "Kindness FC",
    image: teamImg,
  },
  {
    name: "Love and Fun FC",
    image: teamImg,
  },
  {
    name: "Enterteinment FC",
    image: teamImg,
  },
];
const orderedTeams = [...teams].sort((a, b) => a.name.localeCompare(b.name));
const Equipas = () => {
  return (
    <div className="equipas-container">
      <PageHeading headingName="Equipas" />

      <div className="teams-container">
        {orderedTeams.map((team) => (
          <EqCard key={team.name} name={team.name} image={team.image} />
        ))}
      </div>
    </div>
  );
};

export default Equipas;
