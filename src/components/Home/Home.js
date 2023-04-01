import MovieListing from "../MovieListing/MovieListing";
import image from "../../assets/BigPoster.svg";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <div className="Poster">
        <img src={image} />
      </div>
      <MovieListing />
    </>
  );
};

export default Home;
