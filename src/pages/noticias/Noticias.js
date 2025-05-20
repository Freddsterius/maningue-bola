import React from "react";
import NCard from "./nCard/NCard";
import "./Noticias.css";

const newsArticles = [
  {
    title: "Angels FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: require("../../assets/images/golden-ball.png"),
  },
  {
    title: "Dreams FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: require("../../assets/images/golden-ball.png"),
  },
  {
    title: "Progress FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: require("../../assets/images/golden-ball.png"),
  },
  {
    title: "Success FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: require("../../assets/images/golden-ball.png"),
  },
  {
    title: "Freedom FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: require("../../assets/images/golden-ball.png"),
  },
  {
    title: "Happiness FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: require("../../assets/images/golden-ball.png"),
  },
  {
    title: "Life FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: require("../../assets/images/golden-ball.png"),
  },
  {
    title: "Wellness FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: require("../../assets/images/golden-ball.png"),
  },
  {
    title: "Genius FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: require("../../assets/images/golden-ball.png"),
  },
  {
    title: "Kindness FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: require("../../assets/images/golden-ball.png"),
  },
  {
    title: "Love and Fun FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: require("../../assets/images/golden-ball.png"),
  },
  {
    title: "Enterteinment FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: require("../../assets/images/golden-ball.png"),
  },
];

const Noticias = () => {
  return (
    <div className="noticia">
      <h1>Notícias</h1>
      <h3>Destaques da semana:</h3>
      <div className="news-list">
        {newsArticles.map((article) => (
          <NCard key={article.title} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Noticias;
