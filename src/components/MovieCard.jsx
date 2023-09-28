import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardCharacter({ image, title, overview }) {
  return (
    <Card sx={{ width: 250, marginBottom:"20px" }}>
      <CardMedia
        sx={{ height: 350 }}
        image={`https://image.tmdb.org/t/p/w500/${image}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}