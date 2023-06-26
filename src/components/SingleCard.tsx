import "./SingleCard.css";

interface SingleCardProps {
  id: number;
  src: string;
}

const SingleCard = ({ id, src }: SingleCardProps) => {
  return (
    <div className="card" key={id}>
      <div>
        <img src={src} alt={src} className="front" />
        <img src="./img/cover.png" alt="card back" className="back" />
      </div>
    </div>
  );
};

export default SingleCard;
