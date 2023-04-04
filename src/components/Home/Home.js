import MovieListing from "../MovieListing/MovieListing";
import image from "../../assets/backgroundFinal.svg";
import image2 from "../../assets/backgroundSit.svg";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <div className="Poster">
        <img src={image} />
      </div>
      <MovieListing />
      <div className="Poster">
        <img src={image2} />
      </div>
    </>
  );
};

export default Home;
