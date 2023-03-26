import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const MovieCard = (props) => {
 
  const { data } = props;
  return (
    <div className="card-item">
    <Link to={`/movie/${data._id}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
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
