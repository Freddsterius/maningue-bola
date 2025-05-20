import { useState } from "react";
import React from "react";
import "./NCard.css";

const NCard = ({ article }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to show full article

  return (
    <div className="news-card" onClick={() => setIsExpanded(!isExpanded)}>
      <img src={article.image} alt={article.title} className="news-image" />
      <div className="news-content">
        <h2 className="news-title">{article.title}</h2>
        {isExpanded && <p className="news-text">{article.content}</p>}
      </div>
    </div>
  );
};

export default NCard;
