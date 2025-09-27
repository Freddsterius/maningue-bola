import React from "react";
import EqCard from "../../components/cards/eqCard/EqCard";
import "./Equipas.css";
import teamImg from "../../assets/images/teams/bruschetta-50.webp";
import PageHeading from "../../components/atoms/pageHeading/PageHeading";

const teams = [
  {
    name: "Angels FC",
    image: teamImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus reiciendis ratione harum excepturi alias iste repudiandae molestiae minima porro?",
  },
  {
    name: "Dreams FC",
    image: teamImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus reiciendis ratione harum excepturi alias iste repudiandae molestiae minima porro?",
  },
  {
    name: "Progress FC",
    image: teamImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus reiciendis ratione harum excepturi alias iste repudiandae molestiae minima porro?",
  },
  {
    name: "Success FC",
    image: teamImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus reiciendis ratione harum excepturi alias iste repudiandae molestiae minima porro?",
  },
  {
    name: "Freedom FC",
    image: teamImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus reiciendis ratione harum excepturi alias iste repudiandae molestiae minima porro?",
  },
  {
    name: "Happiness FC",
    image: teamImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus reiciendis ratione harum excepturi alias iste repudiandae molestiae minima porro?",
  },
  {
    name: "Life FC",
    image: teamImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus reiciendis ratione harum excepturi alias iste repudiandae molestiae minima porro?",
  },
  {
    name: "Wellness FC",
    image: teamImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus reiciendis ratione harum excepturi alias iste repudiandae molestiae minima porro?",
  },
  {
    name: "Genius FC",
    image: teamImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus reiciendis ratione harum excepturi alias iste repudiandae molestiae minima porro?",
  },
  {
    name: "Kindness FC",
    image: teamImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus reiciendis ratione harum excepturi alias iste repudiandae molestiae minima porro?",
  },
  {
    name: "Love and Fun FC",
    image: teamImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus reiciendis ratione harum excepturi alias iste repudiandae molestiae minima porro?",
  },
  {
    name: "Enterteinment FC",
    image: teamImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus reiciendis ratione harum excepturi alias iste repudiandae molestiae minima porro?",
  },
];
const orderedTeams = [...teams].sort((a, b) => a.name.localeCompare(b.name));
const Equipas = () => {
  return (
    <div className="equipas-container">
      <PageHeading headingName="Equipas" />

      <div className="teams-container">
        {orderedTeams.map((team) => (
          <EqCard
            key={team.name}
            name={team.name}
            image={team.image}
            description={team.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Equipas;
