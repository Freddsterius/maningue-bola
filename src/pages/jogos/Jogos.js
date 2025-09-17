import React from "react";
import JgCard from "../../components/cards/jgCard/JgCard";
import "./Jogos.css";

const games = [
  {
    rivals: "Angels FC 2️⃣ x 3️⃣ Dreams FC",
    timeAndDate: "14:30; Sábado,15/03/2025",
    place: "Boston",
  },
  {
    rivals: "Enterteinment FC 0️⃣ x 4️⃣ Freedom FC",
    timeAndDate: "14:30; Sábado,15/03/2025",
    place: "Rio de Janeiro",
  },
  {
    rivals: "Genius FC 2️⃣ x 3️⃣ Happiness FC",
    timeAndDate: "14:30; Sábado,15/03/2025",
    place: "Maputo",
  },
  {
    rivals: "Kindness FC 3️⃣ x 5️⃣ Life FC",
    timeAndDate: "14:30; Domingo,15/03/2025",
    place: "California",
  },
  {
    rivals: "Love And Fun FC 1️⃣ x 1️⃣ Progress FC",
    timeAndDate: "14:30; Domingo,15/03/2025",
    place: "Dubai",
  },
  {
    rivals: "Success FC 3️⃣ x 3️⃣ Wellness FC",
    timeAndDate: "14:30; Domingo,15/03/2025",
    place: "NYC",
  },
];
const games2 = [
  {
    rivals: "Happiness FC x Dreams FC",
    timeAndDate: "14:30; Sábado,15/03/2025",
    place: "Seul",
  },
  {
    rivals: "Love And Fun FC x Enterteinment FC",
    timeAndDate: "14:30; Sábado,15/03/2025",
    place: "Budapest",
  },
  {
    rivals: "Genius FC x Angels FC",
    timeAndDate: "14:30; Sábado,15/03/2025",
    place: "Madrid",
  },
  {
    rivals: "Wellness FC x Freedom FC",
    timeAndDate: "14:30; Domingo,15/03/2025",
    place: "Buenos Aires",
  },
  {
    rivals: "Life FC x Progress FC",
    timeAndDate: "14:30; Domingo,15/03/2025",
    place: "Auckland",
  },
  {
    rivals: "Kindness FC x Success FC",
    timeAndDate: "14:30; Domingo,15/03/2025",
    place: "Sydney",
  },
];
const games3 = [
  {
    rivals: "Happiness FC x Genius FC",
    timeAndDate: "14:30; Sábado,15/03/2025",
    place: "Tokyo",
  },
  {
    rivals: "Wellness FC x Enterteinment FC",
    timeAndDate: "14:30; Sábado,15/03/2025",
    place: "São Paulo",
  },
  {
    rivals: "Kindness FC x Angels FC",
    timeAndDate: "14:30; Sábado,15/03/2025",
    place: "Cape Town",
  },
  {
    rivals: "Progress FC x Freedom FC",
    timeAndDate: "14:30; Domingo,15/03/2025",
    place: "Cairo",
  },
  {
    rivals: "Life FC x Love And Fun FC",
    timeAndDate: "14:30; Domingo,15/03/2025",
    place: "Kinsgston",
  },
  {
    rivals: "Dreams FC x Success FC",
    timeAndDate: "14:30; Domingo,15/03/2025",
    place: "Mumbai",
  },
];
const Jogos = () => {
  return (
    <div className="jogos">
      <h1>Jogos</h1>
      <h3 className="jornada">Jornada 1</h3>
      {games.map((game) => (
        <JgCard
          key={game.rivals}
          rivals={game.rivals}
          timeAndDate={game.timeAndDate}
          place={game.place}
        />
      ))}
      <h3 className="jornada">Jornada 2</h3>
      {games2.map((game2) => (
        <JgCard
          key={game2.rivals}
          rivals={game2.rivals}
          timeAndDate={game2.timeAndDate}
          place={game2.place}
        />
      ))}
      <h3 className="jornada">Jornada 3</h3>
      {games3.map((game3) => (
        <JgCard
          key={game3.rivals}
          rivals={game3.rivals}
          timeAndDate={game3.timeAndDate}
          place={game3.place}
        />
      ))}
    </div>
  );
};

export default Jogos;
