import axios from "axios";
import { useState, useEffect } from "react";
import Bird from "./Bird";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function Birds() {
    const navigate = useNavigate();
    const [birds, setBirds] = useState([]);

    useEffect(() => {
        axios
            .get(API + "/birds")
            .then((res) => {
                if (res.data.message === false) {
                    navigate("/login");
                } else {
                    setBirds(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="birds">
            <article className="allBirds">
                {birds.map((bird) => {
                    return <Bird key={bird.id} bird={bird} />;
                })}
            </article>
        </div>
    );
}
