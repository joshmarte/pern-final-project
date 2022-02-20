import { Link } from "react-router-dom";

export default function Bird({ bird }) {
  function play() {}
  return (
    <Link to={`/birds/${bird.id}`}>
      <div className="Bird">
        <div className="bird-card-caption">
          <h3>{bird.common_name}</h3>
          <p>
            Latin: <span>{bird.scientific_name}</span>
          </p>
        </div>
        <div className="bird-card-illustration">
          <img src={bird.image} alt={bird.common_name} />
        </div>
      </div>
    </Link>
  );
}
