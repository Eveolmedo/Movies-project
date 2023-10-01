import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';

export default function Slider({ movies }) {

  return (
    <Carousel>
        {movies.map((movie) => (
          <Box sx={{
            width: "100%",
            height: 300}}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h1>{movie.original_title}</h1>

          </Box>
        ))}
    </Carousel>
  );
}