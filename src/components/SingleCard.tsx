import "./SingleCard.css";
import { Card } from "../interfaces";

interface SingleCardProps {
  card: Card;
  handleChoice: (card: Card) => void;
  flipped: boolean;
}

const SingleCard = ({ card, handleChoice, flipped }: SingleCardProps) => {
  return (
    <div className="card" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt={card.src} className="front" />
        <img
          src="./img/cover.png"
          alt="card back"
          className="back"
          onClick={() => {
            handleChoice(card);
          }}
        />
      </div>
    </div>
  );
};

export default SingleCard;
