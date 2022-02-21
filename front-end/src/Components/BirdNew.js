import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BirdEditForm() {
  const [bird, setBird] = useState({
    common_name: "",
    scientific_name: "",
    description: "",
    rating: 3,
    price: 0,
    featured: false,
    image: "",
    audio: "",
  });

  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setBird({ ...bird, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setBird({ ...bird, featured: !bird.featured });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    async function postData() {
      const response = await fetch(`${API}/birds`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bird),
      });
      const content = await response.json();
    }
    postData();

    navigate("/birds");
  };

  return (
    <div className="New">
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
        <label htmlFor="image">Image: </label>
        <input
          id="image"
          value={bird.image}
          type="text"
          onChange={handleTextChange}
          placeholder="Image of Bird"
          required
        />
        <label htmlFor="audio">Audio: </label>
        <input
          id="audio"
          value={bird.audio}
          type="text"
          onChange={handleTextChange}
          placeholder="Bird Audio"
          required
        />
        <br />
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}

export default BirdEditForm;
