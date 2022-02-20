import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function BirdDetails() {
  const [bird, setBird] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(async () => {
    // axios
    //   .get(`${API}/birds/${id}`)
    //   .then((res) => {
    //     setBird(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    try {
      let response = await fetch(`${API}/birds/${id}`);
      let apiData = await response.json();
      setBird(apiData);
    } catch (error) {
      console.log(error);
    }
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
    <article>
      <aside>
        <h4>Bird Card</h4>
      </aside>
      <div className="bird">
        <h5>{bird.common_name}</h5>
        <h6>Latin: {bird.scientific_name}</h6>
        <p>Desc: {bird.description}</p>
        <h6>Rating: {bird.rating}</h6>
        <h6>Price: {bird.price}</h6>
        <h6>Featured: {bird.featured ? "True" : "False"}</h6>
        <img src={bird.image} alt={bird.name} width="200px" />
        <audio src={bird.audio} />
      </div>
      <div className="showNavigation">
        <div>
          <Link to="/birds">
            <button>Back</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
        <div>
          <Link to={`/birds/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BirdDetails;
