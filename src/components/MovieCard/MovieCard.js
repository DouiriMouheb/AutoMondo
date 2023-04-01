import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";
const MovieCard = (props) => {
  const { data } = props;

  return (
    <div className="card-item">
      <Link to={`/car/${data._id}`}>
        <div className="card-inner">
          <div className="card-top">
            <img
              src={`http://localhost:8080/${data.image1}`}
              alt={data.Title}
            />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h3>{data.name}</h3>
              <h3>{data.prix}</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
