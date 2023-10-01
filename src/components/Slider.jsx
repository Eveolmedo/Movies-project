import { useEffect } from 'react'
import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';
import useMovie from "./useMovie"
import CardMedia from '@mui/material/CardMedia';

export default function Slider() {
  const { getData, data } = useMovie([])

  useEffect(() => {
    getData(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`)
  }, [])

  return (
    <Box sx={{width: "100vw"}}>
      <Carousel>
          {data.map(({ backdrop_path, original_title, overview, id}) => (
            <>
              <CardMedia
              sx={{ height: 380 }}
              image={`https://image.tmdb.org/t/p/original//${backdrop_path}`}
              />
              <p>{original_title}</p>
            </>
          ))}
      </Carousel>
    </Box>
  );
}