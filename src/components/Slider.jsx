import { useEffect } from 'react'
import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';
import useMovie from "./useMovie"
import Card from '@mui/material/Card';
import { Link } from "react-router-dom"

export default function Slider() {
  const { getData, data } = useMovie([])

  useEffect(() => {
    getData(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`)
  }, [])

  return (
    <Box sx={{width: "100vw"}}>
      <Carousel>
          {data.map(({ backdrop_path, title, id}) => (
            <>
              <Card
                sx={{ 
                display:"flex",
                width: "100vw",
                height: "55vh",
                justifyContent: "center", 
                alignItems: "flex-end",
                backgroundImage: `url(https://image.tmdb.org/t/p/original//${backdrop_path})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}>
                <Link to={`/detailMovie/${id}`} style={{textDecoration: "none", width: "40vw", padding: 10, textAlign: "center"}}>
                  <div style={{ position: "absolute", backgroundColor: "#000", opacity: .6, width: "40vw", height: "10vh", borderRadius: 20}}></div>
                  <h1 style={{color:"white", position:"relative"}}>{title}</h1>
                </Link>
              </Card>

            </>
          ))}
      </Carousel>
    </Box>
  );
}