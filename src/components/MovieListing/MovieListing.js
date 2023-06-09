import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import Slider from "react-slick";
import "./MovieListing.scss";
import { sliderSettings } from "../../common/settings";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const MovieListing = () => {
  const url = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_API_URL_DEPLOY
  : process.env.REACT_APP_API_URL_LOCAL;
  const [cars, setCars] = useState(null);

  const fetchCars = async () => {
    try {
      const res = await axios.get(`${url}cars`);
      setCars(res.data.cars);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

 
  let renderCars =
    cars ? (
      cars.map((car, index) => <MovieCard key={index} data={car}></MovieCard>)
    ) : (
    <Box sm={{ display: "flex" }}>
      <CircularProgress />
    </Box>
    );

  return (
    
      <div className="movie-list">
        
        <div className="movie-container">
          <Slider {...sliderSettings}>{renderCars}</Slider>
        </div>
      </div>
  );
};

export default MovieListing;
