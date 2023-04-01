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
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { carId } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/cars/${carId}`);
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
                  <img src={`http://localhost:8080/${car.image1}`} />
                </div>
                <div>
                  <img src={`http://localhost:8080/${car.image2}`} />
                </div>
                <div>
                  <img src={`http://localhost:8080/${car.image3}`} />
                </div>
                <div>
                  <img src={`http://localhost:8080/${car.image4}`} />
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
                  <Typography variant="body2" color="text.primary">
                    {car.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">{car.prix}</Button>
                </CardActions>
              </Card>
    </div>
 
  </div>
</div>
    </>
  );
};

export default CarDetail;
