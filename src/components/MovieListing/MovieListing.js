import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import Slider from "react-slick";
import "./MovieListing.scss";
import { sliderSettings } from "../../common/settings";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3></h3>
        {movies.Error}
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="movies-error">
        <h3>ERORRR</h3>
        {shows.Error}
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Our Proudcts</h2>
        <div className="movie-container">
          <Slider {...sliderSettings}>{renderMovies}</Slider>{" "}
        </div>
      </div>
      {/* <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div> */}
    </div>
  );
};

export default MovieListing;
