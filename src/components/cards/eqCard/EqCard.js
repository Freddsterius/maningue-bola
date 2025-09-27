import React from "react";
import "./EqCard.css";

const EqCard = ({ name, image, description }) => {
  return (
    <div className="eqcard">
      <div className="card-image-container">
        <img src={image} alt={name} width={150} className="card-img" />
      </div>

      <div className="card-text-container">
        <h3 className="team-name">{name}</h3>
        <p className="team-description">{description}</p>
        <button className="visit-button">Visitar</button>
      </div>
    </div>
  );
};

export default EqCard;
