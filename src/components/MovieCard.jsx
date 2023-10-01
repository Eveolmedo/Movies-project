import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"

export default function MovieCard({ image, title, overview, id }) {
  return (
    <Link to={`/detailMovie/${id}`} style={{textDecoration: "none"}}>
    <Card sx={{ width: 250, height: 480, marginBottom:"20px", backgroundColor: "#856795", textAlign: "center"}}>
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
    </Link>
  );
}