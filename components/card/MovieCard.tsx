import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import * as React from 'react';
import { movieCardTypes } from './Types/CardTypes';

const MovieCard = ({movie}:movieCardTypes) => {
  console.log("movie",movie)
  return (
        <>
         <CardActionArea>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="150px"
        width="100px"
        image={movie?.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie?.title}
        </Typography>
        
      </CardContent>
     
    </Card>
    </CardActionArea>
            
        </>
    )
}

export default MovieCard
