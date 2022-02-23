import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post(`${API}/signup`, user)
      .then((res) => {
        console.log(res);
        if (res.data.name === "error") {
          setError(res.data.detail);
          setUser({ ...user, email: "" });
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <h1>Sign Up</h1>
        <h3>{error}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              onChange={handleChange}
              required
              minLength="5"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              onChange={handleChange}
              required
              minLength="5"
            ></input>
          </div>{" "}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
