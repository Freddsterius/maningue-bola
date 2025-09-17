import React from "react";
import "./EqCard.css";

const EqCard = ({ name, image }) => {
  return (
    <div className="eqcard">
      <img src={image} alt={name} width={150} />
      <h3>{name}</h3>
    </div>
  );
};

export default EqCard;
