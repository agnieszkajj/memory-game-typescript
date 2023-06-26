import { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./interfaces";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App(): JSX.Element {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne?.src === choiceTwo?.src) {
        const newCards = cards.map((card) => {
          if (card.src === choiceOne.src || card.src === choiceTwo.src) {
            return { ...card, matched: true };
          }
          return card;
        });
        setCards(newCards);
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 2000);
      }
    } else {
      return;
    }
  }, [choiceOne, choiceTwo]);

  //shuffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  //handle a choice
  const handleChoice = (card: Card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //reset choices and increse turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New game</button>
      <div className="card-grid">
        {cards.map((card) => {
          return (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            ></SingleCard>
          );
        })}
      </div>
    </>
  );
}

export default App;
