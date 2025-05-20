import React from "react";
import "./EqCard.css";

const EqCard = ({ name, imageSrc }) => {
  return (
    <div className="eqcard">
      <img src={imageSrc} alt={name} width={150} />
      <h3>{name}</h3>
    </div>
  );
};

export default EqCard;
