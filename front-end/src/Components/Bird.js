import { Link } from "react-router-dom";

export default function Bird({ bird }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={bird.image} className="card-img-top" alt={bird.name} />
            <div className="card-body">
                <h5 className="card-title">{bird.common_name}</h5>
                <p className="card-text">{bird.scientific_name}</p>
                <a href={`/birds/${bird.id}`} className="btn btn-success">
                    Buy Now
                </a>
            </div>
        </div>
    );
}

// <div className="wrapper">
//     <div className="product-img">
//         <img src={bird.image} height="420" width="327" />
//     </div>
//     <div className="product-info">
//         <div className="product-text">
//             <h1>{bird.common_name}</h1>
//             <h2>{bird.scientific_name}</h2>
//             <p>{bird.featured}</p>
//         </div>
//         <div className="product-price-btn">
//             <p>
//                 $<span>{bird.price}</span>
//             </p>
//             <Link to={`/birds/${bird.id}`}>
//                 <button type="button">buy now</button>
//             </Link>
//         </div>
//     </div>
// </div>
