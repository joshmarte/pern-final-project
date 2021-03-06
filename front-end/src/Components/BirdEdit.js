import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function BirdEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const [bird, setBird] = useState({
    common_name: "",
    scientific_name: "",
    description: "",
    rating: 0,
    price: 0,
    featured: false,
    image: "",
    audio: "",
  });

  const handleTextChange = (event) => {
    setBird({ ...bird, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setBird({ ...bird, isFavorite: !bird.isFavorite });
  };

  useEffect(() => {
    axios
      .get(`${API}/birds/${id}`)
      .then((response) => {
        setBird(response.data);
      })
      .catch((e) => console.error(e));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/birds/${id}`, bird)
      .then((response) => {
        setBird(response.data);
        navigate(`/birds/${id}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="common_name">Common Name: </label>
        <input
          id="common_name"
          value={bird.common_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Common Name of Bird"
          required
        />
        <label htmlFor="scientific_name">Scientific Name: </label>
        <input
          id="scientific_name"
          value={bird.scientific_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Scientific Name of Bird"
          required
        />
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          type="text"
          required
          value={bird.description}
          placeholder="Description of Bird"
          onChange={handleTextChange}
        />
        <label htmlFor="rating">Rating: </label>
        <input
          id="rating"
          type="range"
          name="rating"
          value={String(bird.rating)}
          min="0"
          max="5"
          step="1"
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price: </label>
        <input
          id="price"
          type="number"
          name="price"
          value={String(bird.price)}
          onChange={handleTextChange}
        />
        <label htmlFor="featured">Featured: </label>
        <input
          id="featured"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={bird.featured}
        />
        <br />

        <input type="submit" id="submit" />
        <Link to={`/birds/${id}`}>
          <button>Nevermind!</button>
        </Link>
      </form>
    </div>
  );
}

export default BirdEditForm;
