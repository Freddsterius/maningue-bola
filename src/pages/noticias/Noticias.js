import React from "react";
import NCard from "./nCard/NCard";
import "./Noticias.css";
import goldenBallImg from "../../assets/images/hero/golden-ball.png";
import PageHeading from "../../components/atoms/pageHeading/PageHeading";

const newsArticles = [
  {
    title: "Angels FC finishes first!",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: goldenBallImg,
  },
  {
    title: "Dreams FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: goldenBallImg,
  },
  {
    title: "Progress FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: goldenBallImg,
  },
  {
    title: "Success FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: goldenBallImg,
  },
  {
    title: "Freedom FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: goldenBallImg,
  },
  {
    title: "Happiness FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: goldenBallImg,
  },
  {
    title: "Life FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: goldenBallImg,
  },
  {
    title: "Wellness FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: goldenBallImg,
  },
  {
    title: "Genius FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: goldenBallImg,
  },
  {
    title: "Kindness FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: goldenBallImg,
  },
  {
    title: "Love and Fun FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: require("../../assets/images/hero/golden-ball.png"),
  },
  {
    title: "Enterteinment FC",
    content:
      "📃📜📰blanjfhgdfghd fghdf hudfghd fgdfhgdfgdfgfgdg  er er ter erteryt erter eryer-  eyery ery erer7y erer7 er er",
    image: goldenBallImg,
  },
];

const Noticias = () => {
  return (
    <div className="noticia">
      <PageHeading headingName="Notícias" />

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
