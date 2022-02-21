import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function BirdDetails() {
  const [bird, setBird] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    // axios
    //   .get(`${API}/birds/${id}`)
    //   .then((res) => {
    //     setBird(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    async function getData() {
      try {
        let response = await fetch(`${API}/birds/${id}`);
        let apiData = await response.json();
        setBird(apiData);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [id]);

  const handleDelete = async () => {
    // axios
    //   .delete(`${API}/birds/${id}`)
    //   .then((res) => navigate(`/birds`))
    //   .catch((err) => console.log(err));

    try {
      let deleteRes = await fetch(`${API}/birds/${id}`, { method: "DELETE" });
      //   console.log(deleteRes);
      navigate(`/birds`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <article>
        <div className="bird-details">
          <h3>{bird.common_name}</h3>
          <h4>Latin: {bird.scientific_name}</h4>
          <div className="img-desc">
            <img src={bird.image} alt={bird.name} width="200px" />
            <span>Desc: {bird.description}</span>
          </div>
          <h4>Rating: {bird.rating}</h4>
          <h4>Price: {bird.price}</h4>
          <h4>Featured: {bird.featured ? "True" : "False"}</h4>
          <audio src={bird.audio} />
        </div>
      </article>
      <div className="showNavigation">
        <span>
          <Link to="/birds">
            <button>Back</button>
          </Link>
        </span>
        <span>
          <button onClick={handleDelete}>Delete</button>
        </span>
        <span>
          <Link to={`/birds/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default BirdDetails;
