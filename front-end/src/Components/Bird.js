import { Link } from "react-router-dom";

export default function Bird({ bird }) {
  function play() {}
  return (
    <div class="wrapper">
      <div class="product-img">
        <img src={bird.image} height="420" width="327" />
      </div>
      <div class="product-info">
        <div class="product-text">
          <h1>{bird.common_name}</h1>
          <h2>{bird.scientific_name}</h2>
          <p>{bird.featured}</p>
        </div>
        <div class="product-price-btn">
          <p>
            $<span>{bird.price}</span>
          </p>
          <Link to={`/birds/${bird.id}`}>
            <button type="button">buy now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
