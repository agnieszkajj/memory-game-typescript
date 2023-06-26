import { useState } from "react";
import "./App.css";
import { ShuffledCards } from "./interfaces";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App() {
  const [cards, setCards] = useState<ShuffledCards[]>([]);
  const [turns, setTurns] = useState<number>(0);

  //shuffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New game</button>
      <div className="card-grid">
        {cards.map((card) => {
          return <SingleCard {...card}></SingleCard>;
        })}
      </div>
    </>
  );
}

export default App;
