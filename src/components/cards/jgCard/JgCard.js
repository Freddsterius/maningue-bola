import React from "react";
import "./JgCard.css";

const JgCard = ({ rivals, timeAndDate, place }) => {
  return (
    <div className="jg-card">
      <h4>⚽{rivals}</h4>
      <p>🕒{timeAndDate}</p>
      <p>🌍{place}</p>
    </div>
  );
};

export default JgCard;
