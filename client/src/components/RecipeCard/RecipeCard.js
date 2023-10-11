import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

import "./RecipeCard.css";

const RecipeCard = ({ recipe, id }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`${id}`, { state: recipe });

  const stringAvatar = (name) => {
    const words = name.toUpperCase().split(' ');
    return  `${words[0][0]}${words[1][0]}`;
  }

  return (
    <Card className='recipe-card' onClick={() => handleClick()}>
      <CardHeader className='header'
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe.label">
            {stringAvatar(recipe.label)}
          </Avatar>
        }
        title={recipe.label}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.image}
        alt="Paella dish"
      />
      <CardContent className='content'>
        <Typography variant="body2" color="text.secondary">
          Cuisine Type: {recipe.cuisineType}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dish Type: {recipe.dishType}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RecipeCard
