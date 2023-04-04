import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const MovieCard = (props) => {
  const { data } = props;
  const url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_DEPLOY
      : process.env.REACT_APP_API_URL_LOCAL;
  return (
    <Card sx={{ maxWidth: 345,margin:1 }} >
      <CardMedia
        sx={{ height: 100 }}
        image={`${url}${data.image1}`}
        title={data.Title}
       
      />
      <CardContent  sx={{ height: 60 }}>
        <Typography gutterBottom variant="h5" component="div">
        {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.prix}
        </Typography>
      </CardContent>
      <CardActions sx={{ height: 20 }}>
        
        <a href={`/car/${data._id}`}>
              <Button variant="contained" size="small" style={{marginBottom:3}}>Details</Button>
            </a>
      </CardActions>
    </Card>

  );
};

export default MovieCard;
