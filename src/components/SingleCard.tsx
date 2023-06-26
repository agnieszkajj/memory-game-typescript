import "./SingleCard.css";
import { Card } from "../interfaces";

interface SingleCardProps {
  card: Card;
  handleChoice: (card: Card) => void;
  flipped: boolean;
  disabled: boolean;
}

const SingleCard = ({
  card,
  handleChoice,
  flipped,
  disabled,
}: SingleCardProps) => {
  return (
    <div className="card" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt={card.src} className="front" />
        <img
          src="./img/cover.png"
          alt="card back"
          className="back"
          onClick={() => {
            if (!disabled) {
              handleChoice(card);
            }
          }}
        />
      </div>
    </div>
  );
};

export default SingleCard;
