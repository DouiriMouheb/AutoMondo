import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import "./MovieDetail.scss";
const CarDetail = () => {
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
    <div className="movie-section">
      <div className="Card-position">
      <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {car.name} 
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {car.model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {car.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{car.prix}</Button>
      </CardActions>
    </Card>
      </div>
     
    </div>
  );
};

export default CarDetail;


