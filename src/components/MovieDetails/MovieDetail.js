import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import "./MovieDetail.scss";
import Slider from "react-slick";
const CarDetail = () => {
  const url = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_API_URL_DEPLOY
  : process.env.REACT_APP_API_URL_LOCAL;
 
  const settings = {
    //dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"

  };
 
  const { carId } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      console.log(url)
      try {
        const response = await axios.get(`${url}cars/${carId}`);
        setCar(response.data.car);
       
      } catch (error) {
        console.log(error);
      }
    };

    fetchCar();
  }, [carId]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <>
     
      <div class="container text-center">
  <div class="row">
  <div className="imagesList">
              <Slider {...settings}>
                <div>
                  <img src={`${url}${car.image1}`} />
                </div>
                <div>
                  <img src={`${url}${car.image2}`} />
                </div>
                <div>
                  <img src={`${url}${car.image3}`} />
                </div>
                <div>
                  <img src={`${url}${car.image4}`} />
                </div>
              </Slider>
            </div>
  </div>
  <div class="row">
    <div class="Card-position">
    <Card sx={{ maxHeight: 400}}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {car.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {car.model}
                  </Typography>
                  <Typography variant="body3" color="text.primary">
                    {car.description}
                  </Typography>
                  <Typography gutterBottom variant="h3" component="div">
                    {car.prix}
                  </Typography>
                  <Typography variant="h5" color="text.primary">
                  Chiamateci Ora E
                  </Typography>
                  <Typography variant="h5" color="text.primary">
                Concludete Un Affare +393511042762
                  </Typography>
                </CardContent>
                
               
              </Card>
    </div>
 
  </div>
</div>
    </>
  );
};

export default CarDetail;
